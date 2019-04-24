$(document).ready(function() {
  var Hbutton = $("menu").append("<div id='Hbutton' >Click Me to Smooth Scroll to header</div>");
  var Nbutton = $("menu").append("<div id='Nbutton' >Click Me to Smooth Scroll to nav</div>");
  var Mbutton = $("menu").append("<div id='Mbutton' >Click Me to Smooth Scroll to main</div>");

  $("#Hbutton").click(function(){
    $('html, body').animate({

          scrollTop: $("header").offset().top-140
      }, 1000);
  });

  $("#Nbutton").click(function(){
    $('html, body').animate({
          scrollTop: $("nav").offset().top-140
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
