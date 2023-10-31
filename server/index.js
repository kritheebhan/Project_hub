const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const mongourl = "mongodb+srv://jp:2000@cluster0.0fbs3i3.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose.connect(mongourl, {
    useNewUrlparser: true,
})
.then(()=>{
    console.log('mongodb connect');
})
.catch((e)=> console.log(e));

app.get('/',(req,res)=>{
    res.send("hello hi")
})
app.listen(4000,() =>{
    console.log("Server is running on the port 4000");
})