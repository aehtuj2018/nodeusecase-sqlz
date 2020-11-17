
const Sequelize = require('sequelize');

const sequelize = new Sequelize('studentsdb', 'abdi', 'abdiabdi123', {dialect:  'mysql'});

  module.exports= sequelize;