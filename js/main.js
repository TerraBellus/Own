
function main() {

    (function () {
       'use strict';

          $(document).on('click', '.page-scroll', function() {  
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 70
                }, 900);
                return false;
              }
            }
          });
    
    
        // Hide nav on click
        $(document).on('click', '.nav-link', function() {      
            var toggle = $(".navbar-toggler").is(":visible");
            if (toggle) {
            $(".navbar-collapse").collapse('hide');
            }
        });
        
    
        
        // Nivo Lightbox 
        // setTimeout(function(){ 
        //     $('.portfolio-item a').nivoLightbox({
        //         effect: 'slideDown',  
        //         keyboardNav: true,                            
        //     });
        // }, 1000);

            
    }());
    
    
}
    main();