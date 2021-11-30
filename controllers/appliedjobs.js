
// const User = require("../models/user")
const AppliedJob = require("../models/appliedjobs")
const auth = require("../auth")
const {Router} = require("express")
const router = Router()

//index route
router.get("/", auth, async (req, res)=>{
    try{
        const {username} = req.payload
        res.status(200).json(await AppliedJob.find({username}))
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
        res.status(200).json(await AppliedJob.create(req.body))
    } 
    catch(error){
        res.status(400).json({error})
    }
})

router.get("/:id", auth, async (req, res)=>{
    try{
        const {username} = req.payload
        res.status(200).json(await AppliedJob.find({username}))
        const {id} = req.params
        res.status(200).json(await AppliedJob.findOne(id))
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
        res.status(200).json(await AppliedJob.findByIdAndUpdate(id, req.body, {new: true}))
    } 
    catch(error){
        res.status(400).json({error})
    }
})

//delete
router.delete("/:id", auth, async (req, res)=>{
    try{
        
        const {id} = req.params
        res.status(200).json(await AppliedJob.findByIdAndRemove(id))
    } 
    catch(error){
        res.status(400).json({error})
    }
})


module.exports = router