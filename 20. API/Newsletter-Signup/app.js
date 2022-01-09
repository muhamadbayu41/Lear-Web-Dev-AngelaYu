const express = require('express');
const bodyParser = require('body-parser');

const app = new express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.post("/NewsletterSignUp",function (req,res) {
  var exception = 0;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  console.log(firstName+","+lastName+","+email);

  const mailchimp = require("@mailchimp/mailchimp_marketing");

  mailchimp.setConfig({
    apiKey: "08248a4ca750818510bbb7bc1da75109",
    server: "us20",
  });

  // async function run() {
  //   const response = await mailchimp.ping.get();
  //   console.log(response);
  // }

  const listId = "d7e61b89fd";
  const subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };

  async function run() {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
     });
     console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
     res.sendFile(__dirname+"/success.html");
    }

  run().catch(e => res.sendFile(__dirname + "/failure.html"));

});

app.post("/failure",function(req,res){
  res.redirect("/");
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Server is runnning on port 3000");
});

// mail chimp API 08248a4ca750818510bbb7bc1da75109-us20
// mail chimp list ID / audience ID d7e61b89fd
// heroku url https://secret-basin-14979.herokuapp.com/
// git add .
// git commit -m "adding note on app.js file"
// git push heroku master
