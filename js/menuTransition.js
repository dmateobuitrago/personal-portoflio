$(document).ready(function(){
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
    
    
});

