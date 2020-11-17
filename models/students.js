const Student = require ('./../models/studnet');
const router = require('express').Router();

//get 


router.get('/get_student',(req,res)=> {
    Student.findAll().then((result)=> {
        return res.status(200).send(result);
     })
     .catch((err) => {return res.status(500).send(err);})
});

//post

router.post('/add_student',(req,res) => {

    Student.create(
        {id: req.body.id}).then((result)=>{
        return res.status(200).send(result);})
        .catch((err) => {return res.status(500).send(err);});
});



// find by ID

// PATHCH 

//DELETE



module.exports=router;