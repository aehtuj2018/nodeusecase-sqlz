
const express = require('express');
const sequelize = require('./configuration/config');
const students = require ('./models/Student');
//const department = require ('./models/department');


const app = express();
//const router = require('express').Router();
//const router = require ('./models/student');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/students',router);

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

//get all students 

app.get('/get_students',function(req,res){

  students.findAll().then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });

});

//get students by ID

app.get('/get_student/id/:id',function(req,res){

  students.findAll({ where: {id: req.params.id}}).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });
  
});

//get students by Section

app.get('/get_student/section/:section',function(req,res){

  students.findAll({ where: {section: req.params.section}}).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });
  
});


//delete students by ID

app.delete('/delete_student/id/:id',function(req,res,next){

students.destroy({ where: {id: req.params.id}}).then(function(result){

    res.redirect('/get_students');
  }).catch(function(err){
    res.send(err);
  });
  
});



//console message: display server running
app.listen(3050, function () {
  console.log("server running on port 3050");
});
