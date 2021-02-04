const Topic = require('../models/Topic');

class TopicsController {
  async create({ courseId, name }) {
    const topic = await Topic.create({ courseId, name });
    return topic;
  }

  async getAllTopics() {
    const topics = await Topic.findAll();
    return topics;
  }

  async getTopicById(id) {
    const topic = await Topic.findByPK(id);
    return topic;
  }
}

module.exports = new TopicsController();
