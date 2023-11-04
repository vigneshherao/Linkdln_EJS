const express = require("express");
const app = express(); 
const port = 4000;
const path = require("path");

app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public/css")));

app.listen(port,()=>{
    console.log("port is started");
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})