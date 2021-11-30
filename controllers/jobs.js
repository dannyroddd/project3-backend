
// const User = require("../models/user")
const Job = require("../models/model")
const auth = require("../auth")
const {Router} = require("express")
const router = Router()

//index route
router.get("/", auth, async (req, res)=>{
    try{
        const {username} = req.payload
        res.status(200).json(await Job.find({username}))
    } 
    catch(error){
        res.status(400).json({error})
    }
})

 // const {username} = req.payload
  //       req.body.username = username
  //       const {id} = req.params
   //      res.status(200).json(await Job.findByIdAndUpdate(id, req.body, {new: true}))
// get record by id
router.get("/:id", auth, async (req, res)=>{
    try{
        const {username} = req.payload
        res.status(200).json(await Job.find({username}))
        const {id} = req.params
        res.status(200).json(await Job.findOne(id))
    } 
    catch(error){
        res.status(400).json({error})
    }
})

//create
router.post("/", auth, async (req, res)=>{
    try{
        const {username} = req.payload
        req.body.username = username
        res.status(200).json(await Job.create(req.body))
    } 
    catch(error){
        res.status(400).json({error})
    }
})

//update
router.put("/:id", auth, async (req, res)=>{
    try{
        const {username} = req.payload
        req.body.username = username
        const {id} = req.params
        res.status(200).json(await Job.findByIdAndUpdate(id, req.body, {new: true}))
    } 
    catch(error){
        res.status(400).json({error})
    }
})

//delete
router.delete("/:id", auth, async (req, res)=>{
    try{
        
        const {id} = req.params
        res.status(200).json(await Job.findByIdAndRemove(id))
    } 
    catch(error){
        res.status(400).json({error})
    }
})





module.exports = router