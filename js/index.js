
let open=document.querySelector(".open")


$(".open").on("click",function(){

    $('.links').animate({
      width:'15%'
  },500);
      $(".links").show()
      $(".open").animate({left:"15%"},500)
      
})



$(".visible1").on("click",function(){
    $(".text1").slideToggle(500)
    $(".text2").slideUp()
    $(".text3").slideUp()
    $(".text4").slideUp()
})
$(".visible2").on("click",function(){
    $(".text2").slideToggle(500)
    $(".text1").slideUp()
    $(".text3").slideUp()
    $(".text4").slideUp()
})
$(".visible3").on("click",function(){
    $(".text3").slideToggle(500)
    $(".text1").slideUp()
    $(".text2").slideUp()
    $(".text4").slideUp()
})
$(".visible4").on("click",function(){
    $(".text4").slideToggle(500)
    $(".text1").slideUp()
    $(".text2").slideUp()
    $(".text3").slideUp()
})




var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".day").innerHTML = days + " D" ;
  document.querySelector(".hour").innerHTML = hours + " h " ;
  document.querySelector(".min").innerHTML = minutes + " m " ;

  document.querySelector(".sec").innerHTML = seconds + " s " ;

;
  }, 1000);


  var maxLength = 100;

  $('textarea').keyup(function() {
    var textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
  
    if (textlen <= 0) {
      $('#rchars-message').text('Your available characters finished');
    } else {
      $('#rchars-message').text('');
    }
  });




$("a").on("click",function(e){
let clickedItem=($(e.target).attr("href"))
let{top:sectionTop}=$(clickedItem).offset();
$("body,html").animate({scrollTop:sectionTop},1000)
})