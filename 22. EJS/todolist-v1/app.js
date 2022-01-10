//jshint esversion:9
const express = require('express');
const bodyParser = require('body-parser');

const app = new express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
  var date = new Date();
  var today = date.getDay();
  if (today==6||today==0) {
      res.write("<h1>Yeay its weekend!</h1>");
      res.write("<h3>It's time to play</h3>");
  }
  else {
    res.sendFile(__dirname+"/index.html");
  }


});

app.listen(3000,function() {
    console.log("server running on port 3000");
});
