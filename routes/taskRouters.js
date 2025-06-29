const express = require("express")
const router = express.Router()
const Task = require('../models/task')
const task = require("../models/task")


router.get ( "/tasks" , async(req , res )=>{
    try{
        const task = await Task.find()
        res.status(200).json(task)
    }
    catch(err){
       res.status(500).json({
        error : err.message
       })
        
    }
})

router.post ( "/tasks" , async ( req  ,res )=>{
     try{
        const  task = new Task( req.body)
        await task.save()
        res.status(201).json({message : " Added Successfult!" , task})
    }
    catch(err){
       res.status(400).json({
        error : err.message
       })
        
    }
})

router.put("/tasks/:id" , async ( req , res ) => {
    try {
        const id = req.params.id
        const datatoupdate = req.body
        const task = await Task.findByIdAndUpdate(id , datatoupdate , {new : true})
        res.status(200) . json({
            message : " Updated Successufly!" , task
        })

    } catch (error) {
        res.status(400).json({
        error : error.message
       })
    }
})

router.delete("/tasks/:id" , async ( req , res ) => {

    try{
        const id = req.params.id;
        const task = await Task.findByIdAndDelete( id )
        res.status(200).json({
            message : "Task deleted succssufly! " , task
        })
    }
    catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

module.exports = router