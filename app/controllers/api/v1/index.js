/**
 * @file contains entry point of controllers api v1 module
 * @author Arya Ramadani
 */

const cars = require("./cars");
const users = require("./users");

module.exports = {
  cars,
  users
};
