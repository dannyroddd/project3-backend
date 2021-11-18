require("dotenv").config()
const mongoose =  require("mongoose")
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const {MONGODBURI} = process.env

//connection
mongoose.connect(MONGODBURI, config)


//database event logs

mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", (error) => console.log(error))

module.exports = mongoose