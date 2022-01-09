const express = require('express');
const bodyParser = require('body-parser')

const app = new express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/bmicalc',function (req,res) {
  res.sendFile(__dirname+"/index.html")
})

app.post('/bmicalc',function(req,res){
  var w = parseFloat(req.body.w)
  var h = parseFloat(req.body.h)
  var bmi = Math.round(w/(h*h)*100)/100

  res.send("Your BMI is "+bmi)
})

app.listen(2000,function(){
  console.log("Server actived on port 2000")
})
