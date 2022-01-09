const express = require('express');
const app = new express();

app.get("/",function(req,res){
  res.send("<h1>Hello</h1>")
})

app.get("/contact",function(req,res){
  res.send("<h1>Contact me at muhamadbayu.work@gmail.com</h1>")
})

app.get("/about",function(req,res){
  res.send("<h1>About</h1> <p>My Name is Muhamad Bayu, and right snow i'm switching my career to be a software developer </p>")
})

app.listen(3000,function(){
  console.log("Server started on port 3000")
})
