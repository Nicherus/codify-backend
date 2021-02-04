/* global jest, describe, it, expect */
const coursesController = require('../../src/controllers/coursesController');
const InexistingId = require('../../src/errors/InexistingId');
const Course = require('../../src/models/Course');

jest.mock('../../src/models/Course');
jest.mock('sequelize');

describe('findCourseByName', () => {
  it('should return the same object', async () => {
    const name = 'JvaScript';
    const expectedObject = { id: 1, name };
    Course.findOne.mockResolvedValue(expectedObject);
    const course = await coursesController.findCourseByName(name);
    expect(course).toBe(expectedObject);
  });
});

describe('listAllCourses', () => {
  it('should return an array', async () => {
    const expectedArray = [{ id: 1, name: 'JavaScript' }];
    Course.findAll.mockResolvedValue(expectedArray);
    const courses = await coursesController.listAllCourses();
    expect(courses).toBe(expectedArray);
  });
});

describe('getCourseById', () => {
  it('should return an object', async () => {
    const id = 1;
    const expectedObject = { id, name: 'JavaScript' };
    Course.findOne.mockResolvedValue(expectedObject);
    const course = await coursesController.getCourseById(id);
    expect(course).toBe(expectedObject);
  });

  it('should throw an error', async () => {
    const id = -1;
    Course.findOne.mockResolvedValue(null);

    expect(async () => {
      await coursesController.getCourseById(id);
    }).rejects.toThrow(InexistingId);
  });
});
