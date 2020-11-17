const Sequelize = require("sequelize");
const Sequelize = require("./../configuration/config");


// define sequlize Model

const Student = sequelize.define("students", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  section: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  Nationality: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Student;
