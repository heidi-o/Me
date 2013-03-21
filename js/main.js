/*global $:false */
$(document).ready(function(){
        "use strict";
$('.more').localScroll();

$('ul.navigation').mobileMenu({
	defaultText: 'Navigation',
	className: 'select-menu',
	subMenuDash: '&ndash;'
});

var yPos = $(window).height()/4;

$(function() {
	$('.header-scrolldown').delay(1000).animate({
		marginTop: yPos
	}, 1200);
});
	
$(function() {
	$(".zoom").css("opacity","0");
	$(".zoom").hover(function () {
		$(this).stop().animate({
			opacity: '0.8'
		}, "slow");
},
 
function () {
	$(this).stop().animate({
		opacity: '0'
		}, "slow");
	});
});

//==================== Isotope ========================//
	var $container = $('#portfolio .items');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});
	});
	$('.filter li a').click(function() {
		$('.filter li a').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});
		return false;
	});

//==================== FlexSlider ========================//
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

//==================== Contact Form ======================//
    $('form').validate({
        // Set up rules for each field in your form. Reference each one by its "name" not "id"
        rules: {
            Your_Name:{required:true},
            Email_Address:{required:true, email:true},
            Message:{required:true}
		}
	});
	// Submit form using AJAX and clear the submitted results
	$('form').ajaxForm({
		target: '#message-form',
		url: 'js/mail.php',
		success: successMessage,
		clearForm:true,
		resetForm:true
	});

// Fade in success message
function successMessage() {
	$('#message-form').fadeIn(500).delay(5000).fadeOut(500);
}

//==================== Slideout Menu  ========================//
	var slideout = $('#slideout-wrap');
	var slideoutButton = $('#slideout-button a');	
	var slideoutHeight = slideout.height();	
	
	slideoutButton.toggle( function() {		
		slideout.animate({marginTop : 0}, 600, 'easeInOutCirc');		
		slideoutButton.addClass('close');		
	}, function() {		
		slideout.animate({marginTop : -slideoutHeight}, 600, 'easeInOutCirc');		
		slideoutButton.removeClass('close');		
		
	});

//==================== Accordion ========================//
		$( "#accordion" ).accordion({
			autoHeight: false,
			navigation: true
		});
		
//==================== Testimonials ========================//
	$('.testimonials').testimonials();
	
//==================== Navigation / Menu ========================//
    $('.navigation').onePageNav({
    begin: function() {
    },
    end: function() {
    },
    scrollOffset: 30
    });

//==================== Prettyphoto ========================//
$(document).ready(function(){
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
	theme: 'dark_square' /* light_rounded / dark_rounded / light_square / dark_square / facebook */
	});
});

});