const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.sendFile(__dirname+'/index.html')
})

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+'/bmiCalculator.html')
})

app.post("/",function(req,res){
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var result = num1 + num2

  res.send("Thanks for submiting your request, the answer is "+result)
})

app.post("/bmiCalculator",function(req,res){
  var weight = Number(req.body.weight)
  var height = Number(req.body.height)
  var result = weight/(height*height)
  result = Math.round((result + Number.EPSILON) * 100) / 100
  console.log(weight)
  console.log(height)
  console.log(result)

  var status = ""

  if (result<18) {
    status = "underweight"
  }
  else if (result>25) {
    status = "overweight"
  }
  else {
    status = "normal"
  }

  res.send("Thanks for submiting your request, your BMI is "+result+" which is "+ status)
})

app.listen(3000,function(){
  console.log("Server started on port 3000")
})
