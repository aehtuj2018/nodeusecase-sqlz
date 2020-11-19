const Sequelize = require('sequelize');
const sequelize = require('../configuration/config');

// define sequlize Model

const student = sequelize.define('Student', {
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
  }
},
  {timestamps:false});

module.exports = student;
