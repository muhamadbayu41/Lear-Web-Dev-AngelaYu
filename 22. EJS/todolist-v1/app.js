//jshint esversion:9
const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

// let people = ['geddy', 'neil', 'alex'];
// let html = ejs.render('<%= people.join(", "); %>', {people: people});

const app = new express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get("/",function (req,res) {

  var date = new Date();
  var today = date.getDay();
  var todayName=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

  // if (today==6||today==0) {
  //   todayName = "weekend";
  // }
  // else {
  //   todayName = "weekday";
  // }

res.render("list",{kindOfDay:todayName[today]});

});

app.listen(3000,function() {
    console.log("server running on port 3000");
});
