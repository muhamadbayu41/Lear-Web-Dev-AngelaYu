// $(document).keypress(function(event){
//   $("h1").text(event.key)
//   $("h1").css("color","green")
// })

$("button").click(function(){
  $("h1").toggle()
  $("h1").slideToggle()
  $("h1").fadeToggle()
  $("h1").slideUp().slideDown().animate({opacity:0.25})
  setTimeout(function () {
    $("h1").animate({opacity:1})
  },10000)
})
