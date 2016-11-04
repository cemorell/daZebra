$(document).ready(function(){

   $("body:not(#catagories)").click(function(){
        $("#catagories a").addClass("blue");
      setTimeout(function () {
        $("#catagories a").removeClass("blue");
      }, 400);
    });

  $('a[href^="#"]').on('click', function(event) {
      var section = $(this.getAttribute('href'));
      if( section.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: section.offset().top
          }, 500);
      }
  });

});
