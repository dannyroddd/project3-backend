require("dotenv").config()
const express = require("express")
const app = express();
const { PORT = 3000 } = process.env
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("./db/db")

//middleware 
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"))

//server listener 

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)})