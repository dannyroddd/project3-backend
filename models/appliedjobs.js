const {Schema, model} = require("mongoose")

const appliedJobSchema = new Schema({
    username: {type: String, required: true},
    title: String,
    company: String,
    url: String,
    date: String,
    location: String,
    status: String

}, {timestamps: true})

const AppliedJob = model("appliedjob", appliedJobSchema)

module.exports = AppliedJob

