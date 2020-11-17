
const express = require('express');
const sequelize = require('./configuration/config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

// Find all users
const students = Student.findAll();
console.log(students.every(students => students instanceof Student)); // true
console.log("All users:", JSON.stringify(students, null, 2));

//console message: display server running
app.listen(3050, function () {
  console.log("server running on port 3050");
});
