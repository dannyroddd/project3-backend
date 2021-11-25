const {Schema, model} = require("mongoose")

const jobSchema = new Schema({
    username: {type: String, required: true},
    title: String,
    company: String,
    url: String,
    date: String,
    location: String,
    status: String

}, {timestamps: true})

const Job = model("job", jobSchema)

module.exports = Job