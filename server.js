require("dotenv").config()
const express = require("express")
const app = express();
const { PORT = 3000 } = process.env
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("./db/db")
const AuthRouter = require("./controllers/user")
const auth = require("./auth")

//middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"))

//auth
app.get("/", auth, (req, res) =>{
    res.json(req.payload)
})

app.use("/auth", AuthRouter)

//server listener 

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)})