$(document).ready(function(){
    
//    animate CV and Contact me section
    
    var $cvLink = $(".cv-link");
    var $contactLink = $(".contact-link");
    var $cvInfo = $('.cv');
    var $contactInfo = $(".contact-me");
    var $closeOverall = $(".close-overall");

    $cvLink.mouseup(function(){
        console.log("cvLink mouseUp working");
        $cvInfo.toggleClass("open");
    });

    $contactLink.mouseup(function(){
        $contactInfo.toggleClass("open");
    });
    
    $closeOverall.mouseup(function(){
        $contactInfo.removeClass("open");
        $cvInfo.removeClass("open");
    });
    
//    animate project descprition
    
    if (window.matchMedia("(min-width: 630px)").matches) {
  /* the viewport is at least 630 pixels wide */
        
        console.log("width > 630");
    
        var $project = $(".project");
        var $projectDescription = $(".project-description");


        $project.hover(function(){
            $(this).find($projectDescription).fadeIn( 400 );
        });

        $project.mouseleave(function(){
            $(this).find($projectDescription).fadeOut( 400 );
        });
    }    
});

