$(document).ready(function() {
  var Hbutton = $("nav").append("<div id='Hbutton' ><h2>Vilka är vi</h2></div>");
  var Mbutton = $("nav").append("<div id='Mbutton' ><h2>Vårat mål</h2></div>");
  var Fbutton = $("nav").append("<div id='Fbutton' ><h2>Informaion</h2></div>");


  $("#Hbutton").click(function(){
    $('html, body').animate({

          scrollTop: $("header").offset().top-140
      }, 1000);
  });

  $("#Fbutton").click(function(){
    $('html, body').animate({
          scrollTop: $("footer").offset().top-140
      }, 1000);
  });

  $("#Mbutton").click(function(){
    $('html, body').animate({
          scrollTop: $("main").offset().top-140
      }, 1000);
  });

  $("#").click(function(){
    $('html, body').animate({
          scrollTop: $("main").offset().top-140
      }, 1000);
  });
});
