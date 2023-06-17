// JavaScript Document

/*~~~~~~~~~~~~~~~~~~~~
Piechart 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var initCharts = function() {
	// strict mode syntax
	'use strict';
	var charts = $('.percentage');
	charts.easyPieChart({
		animate: 1000,
		scaleColor: false,
		onStep: function(value) {
		    this.$el.find('span').text(~~value);
		}
	});
}

function parallaxInit() {
    $('#responsive_design').parallax('50%', .5);
    $('#parallax1').parallax('50%', 0.2);
    $('#parallax2').parallax('50%', 0.2);
    $('#parallax3').parallax('50%', 0.2);
    $('#parallax4').parallax('50%', 0.2);
    $('#parallax5').parallax('50%', 0.2);
}

function animatedMenu() {
    $(window).on("scroll", function() {
        if ( $(window).scrollTop() >= 1 ) {
            $(".site-header").addClass("animated");
        } else {
            $(".site-header").removeClass("animated");
        }
    });
}

//Parallax/
$(window).load(function(){
    'use strict';

    if ($(window).width() > 1024) {
        parallaxInit();
    }

    //portfolio filtering
    var $portfolioGrid = $('.portfolio-grid');
    $portfolioGrid.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    
    $('#portfolio-nav li').on('click', function(){
        $('#portfolio-nav .current').removeClass('current');
        $(this).addClass('current');
    
        var selector = $(this).children('a').attr('data-filter');
        $portfolioGrid.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    // blog post slider
    $('.post-slider').flexslider({
        animation: "slide",
        slideshow: false
    });


    /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        Contact Form Validation
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
    $(".post-thumb:not(.soundcloud):not('.embed')").each(function() {
        if ($(this).children().is("iframe")) {
            $(this).children("iframe").addClass("embed-responsive-item");
            $(this).children("iframe").wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
        }
    });
});

/*~~~~~~~~~~~~~~~~~~~~~~
Ready Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(function() {
    // strict mode syntax
	'use strict';

    //Primary Navigation Script
	$('#nav, .navbar-nav').singlePageNav({
        offset: $('.site-header').outerHeight(),
        easing: 'easeInOutExpo',
        currentClass: 'active',
        updateHash: false,
        speed: 1200
    });

    $("#nav > li > a, .navbar-nav > li > a").on("click", function(e){
        e.preventDefault;
        if($(window).width() <= 767){
            if ($(this).next().is("ul")) {
                return false;
            }else {
                $(".navbar-toggle").trigger("click");
            }
        };
    });

    // on scroll header
    $(window).scroll(function(event) {
        if ($(window).scrollTop() >=300 ) {
            $(".scroll-header").addClass('visible');
        }else {
            $(".scroll-header").removeClass('visible');
        }
    });

    // inline popup for portfolio
    $('.pf-popup').magnificPopup({
        type:'inline',
        callbacks: {
            beforeOpen: function() {
                $('body').addClass('pf-active');
            },
            afterClose: function() {
                $('body').removeClass('pf-active');
            }
        },
        gallery: {
            enabled: true
        },
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    // Next Session Scroll Animate Script
	$('a.next-section').on('click', function(){        
        var elementId = $(this).attr('href');   
        $('html, body').animate({ scrollTop: $(elementId).offset().top }, 1000);
        return false;
    });
	
    // Top Session Scroll Animate Script
	$('a.top-section').on('click', function(){
		$("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
		return false;
	});

    // Flex Slider
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 235,
        itemMargin: 0,
        asNavFor: '#slider'
    });
  
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
 
    //Clients Logo
	$('#clients').carouFredSel({
		auto: false, //true
		prev: '#prev2',
		next: '#next2',
		pagination: "#pager2",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		responsive: true,
		width: '100%',
		scroll: 1,
		items: {
			width: 230,
			height: 'auto',	//	optionally resize item-height			
			visible: {
				min: 1,
				max: 6
			}
		}
	});

    /*-------------------------------------------------
        Prefiew Panel 
    --------------------------------------------------*/

    $(".switcher-trigger").on('click', function() {
        $(".customizer-wrapper").toggleClass('active');
    });

    $(".color-options li").on("click", function(){
        $("#color-changer").attr({
            "href":"css/colors/"+$(this).attr("data-color")+".css"
        });
    });

    $(".layout-mode .boxed a").on("click", function(event){
        event.preventDefault();
        $("#wrapper").addClass('boxed')
    });

    $(".layout-mode .wide a").on("click", function(event){
        event.preventDefault();
        $("#wrapper").removeClass('boxed')
    });

    removePlaceholder ();
    animatedMenu()
});


if ($(window).width() >= 768) {
    //when view section
    $('.animated').one('inview', function (event, visible) {
        if (visible == true) {
            $(this).addClass('fadeInLeft');
        }
    });

    $('.animate0').one('inview', function (event, visible) {
        if (visible == true) {
            $(this).addClass('fadeInRight');
        }
    });
    $('.animate1').one('inview', function (event, visible) {
        if (visible == true) {
            $(this).addClass('fadeInUp');
        }
    });
    $('.animate2').one('inview', function (event, visible) {
        if (visible == true) {
            $(this).addClass('fadeInDown');
        }
        $('.skill').one('inview', function (event, visible){
            if (visible == true) {initCharts()}
        });
    });
}

// Email function
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function ValiDate(){
	var name = $('#name').val();
	var email = $('#email').val();
	var textarea = $('#textarea').val();
	var errormessage = '';
	
	if(name == ''){ errormessage = errormessage+'<p>Please enter your Fullname.</p>';
		$('#name').addClass('er');
		$('.error').fadeIn(1000);
	}
	else{$('#name').removeClass('er');}
	
	if(email == '' ){ errormessage = errormessage+'<p>Please enter your Email.</p>';
		$('#email').addClass('er');
		$('.error').fadeIn(1000);
	}
	else if(!IsEmail(email)){errormessage = errormessage+'<p>Please enter a valid Email.</p>';
		$('#email').addClass('er');
		$('.error').fadeIn(1000);
	}
	else{$('#email').removeClass('er');}
	
	if(textarea == ''){errormessage = errormessage+'<p>Please put some message.</p>';
		$('#textarea').addClass('er');
		$('.error').fadeIn(1000);
	}
	else{$('#textarea').removeClass('er');}
	
	//Ajax colling
	if(errormessage==''){
     
	   var dataString = 'name='+ name + '&email=' + email + '&text=' + textarea;

		$.ajax({
			type: "POST",
			url: "email.php",
			data: dataString,
			success: function(msg){
				//$('.mailFromDiv').fadeOut(1000);							
				$(".mailFromDiv").animate({height:'0px'}, 500);
				$('.mailSuccessDiv').fadeIn(1500);
			}
		});

	}else{
		$(".mailFromDiv .error").html(errormessage);
	}
}

function removePlaceholder () {
    $("input").focusin(function(){
        $("input").data("holder",$(this).attr("placeholder"));
        $(this).attr("placeholder","");
    });
    $("input").focusout(function(){
        $(this).attr("placeholder",$(this).data("holder"));
    });
    $("textarea").focusin(function(){
        $("textarea").data("holder",$(this).attr("placeholder"));
        $(this).attr("placeholder","");
    });
    $("textarea").focusout(function(){
        $(this).attr("placeholder",$(this).data("holder"));
    });
}

		
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	Scroll Function For Navigation
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$(window).scroll(function(){
	if ($(window).scrollTop() < 500 && $(window).width() >= 769) {
		$("#primary").css({
				top: '50px'
			})
	}
	else if($(window).scrollTop() > 500 && $(window).width()>= 769) {
		$("#primary").css({
				top: '200px'
			})
	}
	
	else if($(window).scrollTop() > 500 && $(window).width() < 768) {
		$("#primary").css({
			top: '0',
			right:'0'
		})
	}
	
});