// debugger
var gamePattern = []
var buttonColours = ["red","blue","green","yellow"]
var userClickedPattern = []
var level = 0

function nextSequence() {
  level++
  $("h1").text("Level "+level)
  userClickedPattern=[]
  var randomNumber = Math.floor((Math.random()*4))
  var randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  animatePress(randomChosenColour)
  playSound(randomChosenColour)

  // for (let i = 0; i < gamePattern.length; i++) {
  //   setTimeout(() => {
  //     animatePress(gamePattern[i])
  //   },i*1000)
  // }
}

$(document).keypress(function(){
  while (level==0) {
    nextSequence();
    $("h1").text("Level "+level)
  }
})

$(".btn").click(function(e){
  var userChoosenColour=e.target.id
  animatePress(userChoosenColour)
  userClickedPattern.push(userChoosenColour)
  playSound(userChoosenColour)
  console.log(userClickedPattern)
  checkAnswer(userClickedPattern.length-1)
})

function checkAnswer(lastButtonId)
{
  if (gamePattern[lastButtonId]==userClickedPattern[lastButtonId]) {
    // console.log("correct")
    if (lastButtonId+1==gamePattern.length) {

      setTimeout(nextSequence,2000)
    }

  }
  else{
    startOver()

  }

function startOver() {
  $("body").addClass("game-over");
  playSound("wrong")
  setTimeout(function(){
    $("body").removeClass("game-over")
  },200)
  $("h1").text("Game Over, Press Any Key to Restart")
  level=0
  gamePattern=[]
}


}

function playSound(name){
  var audio = new Audio('sounds/'+name+'.mp3')
  audio.play()
}

function animatePress(name) {
  $("#"+name).addClass("pressed")
  setTimeout(function () {
    $("#"+name).removeClass("pressed")
  },100)
}
