const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = new express();
var city =""
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index1.html")
})

app.post("/",function(req,res){

  city = req.body.city
  console.log(city)
  const query = city
  const unit = "metric"
  const apiKey = "b1f53acb7eab57d800923b539b208ecd#"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey

  https.get(url, (resUrl) => {
    console.log(resUrl.statusCode)
    resUrl.on("data", (resData) => {
      const weatherData = JSON.parse(resData)
      const temp = weatherData.main.temp
      console.log(temp)
      const weatherDesc = weatherData.weather[0].description
      console.log(weatherDesc)
      const city = weatherData.name
      const weatherIcon = weatherData.weather[0].icon
      const iconUrl ="http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png"
      res.write("<h1>The Temprature in "+city+" is "+temp+" celcius</h1>")
      res.write("<h2>The Wheather currently is "+weatherDesc+"</h2>")
      res.write("<img src="+iconUrl+">")
      res.send()
    })
  })
})

app.listen(3000, function() {
  console.log("Server activated on PORT 3000")
})
