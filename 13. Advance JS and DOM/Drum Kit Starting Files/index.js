var sounds = ["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3",
"tom-2.mp3","tom-3.mp3","tom-4.mp3"]

document.querySelectorAll(".drum").forEach((item, i) => {
  item.addEventListener("mousedown",function (){
    var audio = new Audio('sounds/'+sounds[i])
    audio.play()
    item.classList.add("pressed")
  })
});

document.querySelectorAll(".drum").forEach((item, i) => {
  item.addEventListener("mouseup",function (){
    item.classList.remove("pressed")
  })
});

document.addEventListener("keydown",function(event){
  makesound(event.key)
  buttonAnimationPress(event.key)

})

document.addEventListener("keyup",function(event){
  buttonAnimationRelease(event.key)

})

function buttonAnimationPress(key) {
  document.querySelector("."+key).classList.add("pressed")

}

function buttonAnimationRelease(key) {
  document.querySelector("."+key).classList.remove("pressed")

}

function makesound(key){
  switch (key) {
    case "w":
    var audio = new Audio('sounds/'+sounds[0])
    audio.play()
      break;
      case "a":
      var audio = new Audio('sounds/'+sounds[1])
      audio.play()
        break;
        case "s":
        var audio = new Audio('sounds/'+sounds[2])
        audio.play()
          break;
          case "d":
          var audio = new Audio('sounds/'+sounds[3])
          audio.play()
            break;
            case "j":
            var audio = new Audio('sounds/'+sounds[4])
            audio.play()
              break;
              case "k":
              var audio = new Audio('sounds/'+sounds[5])
              audio.play()
                break;
                case "l":
                var audio = new Audio('sounds/'+sounds[6])
                audio.play()
                  break;
    default:

  }
}
