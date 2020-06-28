// For Carousal Button jQuery Script 
$("#carouselButton").click(function(){
   if ($("#carouselButton").children("span").hasClass('fa-pause')) {
       $("#mycarousel").carousel('pause');
       $("#carouselButton").children("span").removeClass('fa-pause');
       $("#carouselButton").children("span").addClass('fa-play');
   }
   else if ($("#carouselButton").children("span").hasClass('fa-play')){
       $("#mycarousel").carousel('cycle');
       $("#carouselButton").children("span").removeClass('fa-play');
       $("#carouselButton").children("span").addClass('fa-pause');                    
   }
});

// This is the JS code for Reserve Table Button
$("#reserveButton").click(function(){
   $('#reserveModal').modal('show');
});

// This is the JS code for Login Button
$("#loginButton").click(function(){
   $('#loginModal').modal('show');
});