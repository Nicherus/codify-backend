/* eslint-disable class-methods-use-this */
const bcrypt = require('bcrypt');
const ConflictError = require('../errors/ConflictError');
const User = require('../models/User');

class UsersController {
  async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }

  async postSignup({ name, email, password }) {
    const userExists = await this.findUserByEmail(email);
    if (userExists) throw new ConflictError();
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return user;
  }
}

module.exports = new UsersController();
