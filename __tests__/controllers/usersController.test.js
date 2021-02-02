/* global jest, describe, it, expect */
const usersController = require('../../src/controllers/usersController');
const ConflictError = require('../../src/errors/ConflictError');
const User = require('../../src/models/User');

jest.mock('bcrypt', () => ({
  hashSync: (password) => password,
}));

jest.mock('../../src/models/User');

jest.mock('sequelize');

describe('postSignup', () => {
  it('should return a user with id', async () => {
    const body = {
      name: 'test',
      email: 'test@test.com',
      password: '123456',
    };
    const expectedObject = {
      id: 1,
      name: 'test',
      email: 'test@test.com',
      password: '123456',
    };
    jest.spyOn(usersController, 'findUserByEmail').mockImplementationOnce(() => null);
    User.create.mockResolvedValue(expectedObject);
    const user = await usersController.postSignup(body);

    expect(user).toBe(expectedObject);
  });

  it('should throw a conflict error', async () => {
    const body = {
      name: 'test',
      email: 'test@test.com',
      password: '123456',
    };
    const expectedObject = {
      id: 1,
      name: 'test',
      email: 'test@test.com',
      password: '123456',
    };
    jest.spyOn(usersController, 'findUserByEmail').mockImplementationOnce(() => expectedObject);

    expect(async () => usersController.postSignup(body)).rejects.toThrow(ConflictError);
  });
});

describe('findByEmail', () => {
  it('should return the same object', async () => {
    const email = 'test@test.com';
    const expectedObject = {
      id: 1, email, name: 'test', password: '123456',
    };
    User.findOne.mockResolvedValue(expectedObject);
    const user = await usersController.findUserByEmail(email);
    expect(user).toBe(expectedObject);
  });
});
