
const Sequelize = require('sequelize');
sequelize = new Sequelize('studentsdb', 'abdi', 'abdiabdi123', {dialect:  'mysql'});

module.exports= sequelize;

  
 