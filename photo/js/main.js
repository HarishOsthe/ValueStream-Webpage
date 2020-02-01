;(function () {
	
	'use strict';
	function openFile(file) {
        var extension = file.substr( (file.lastIndexOf('.') +1) );
        switch(extension) {
            case 'jpg':
            case 'png':
            case 'gif':   // the alert ended with pdf instead of gif.
            case 'zip':
            case 'rar':
            case 'pdf':
            case 'php':
            case 'doc':
            case 'docx':
            case 'xls':
            case 'xlsx':
			case 'txt':
                return true;
                break;
            default:
                return false;
        }
	};
	

	var addFolders = function (){
		var loc = window.location.pathname;
		var dir = loc.substring(0, loc.lastIndexOf('/'));
		var count = ""
		// var count2 = 0
		// var fileNames = new Array();
		$.ajax({
			url: dir+'/Gallary',
			
			success: function(data){
			$(data).find("a").attr('href',function (i, val) {
				var fileNames = {}
				var count=0
				$.ajax({
				url: dir+'/Gallary/'+decodeURIComponent(val),
				success: function(data){
					$(data).find("a").attr('href', function(j,val2){
						if(openFile(val2)){
							fileNames[j]=decodeURIComponent(val2);
						}           
					});
				}
				});

				console.log(fileNames.length)
				
				// console.log(Object.keys(fileNames).length)
				// console.log(fileNames)
				// console.log(fileNames)
				// $.each(fileNames, function(key, value){

				// 	$("#result").append(key + ": " + value + '<br>');
		
				// });				

				if (decodeURIComponent(val).endsWith('/') == true){
					// var images = ['banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg', 'banner-4.jpg'];
					// $('<img class="fade-in" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
					$('.grid').append(
						'<div class="grid-item item animate-box" data-animate-effect="fadeIn">'+
							'<a href="single.html">'+
								'<div class="img-wrap">'+
									'<img src="images/img_1.jpg" alt="" class="img-responsive">'+
								'</div>'+
								'<div class="text-wrap">'+
									'<div class="text-inner">'+
										'<div>'+
											'<h2>'+decodeURIComponent(val).replace("/","")+'</h2>'+
											// '<span>'+count+'</span>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</a>'+
						'</div>'
					);								
				}
				console.log(val);
			});
			var i = 0;
			$('.animate-box').waypoint( function( direction ) {
				
				if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							},  k * 50, 'easeInOutExpo' );
						});
						
					}, 50);
					
				}

			} , { offset: '90%' } );
			}
			

		}); 
	};    

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var contentWayPoint = function() {
		console.log('im second')
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {
			
			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '90%' } );
	};


	var isotopeImageLoaded = function() {
		
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  resizable: false,
		  masonry: {
		    columnWidth: '.grid-sizer',
		  }
		});

		$grid.imagesLoaded().progress( function() {
		  $grid.isotope('layout');
		});

	}

	var toggleAside = function() {

		$('.aside-toggle').click(function(event){
			
			event.preventDefault();
			var aside = $('#fh5co-aside'),
				 grid = $('#fh5co-image-grid, .aside-toggle'),
				 bio = $('#fh5co-bio'),
				 imgBg = $('.image-bg');


			if (aside.hasClass('show')) {
				
				
				if ($(window).width() <= 480 ) {
					TweenLite.to(aside, -1, { 
						left: '-85%',
						ease: Power1.easeNone 
					});
				} else {
					TweenLite.to(aside, -1, { 
						left: '-50%',
						ease: Power1.easeNone 
					});
				}
				
				TweenLite.to(grid, -1, { css: { 
						"-webkit-transform" : "translate3d(0%, 0px, 0px)", 
						"-moz-transform" : "translate3d(0%, 0px, 0px)", 
						"-ms-transform" : "translate3d(0%, 0px, 0px)", 
						"-o-transform" : "translate3d(0%, 0px, 0px)", 
						"transform" : "translate3d(0%, 0px, 0px)"
					}, 
					ease: Power1.easeNone
				});

				TweenLite.to(bio, 1, { opacity: 0, delay: 0.2, ease: Power1.easeNone});
				TweenLite.to(imgBg, 1, { opacity: 0, delay: 0.2, ease: Power1.easeNone});
				

				aside.removeClass('show');	
			} else {

				TweenLite.to(aside, -1, { 
					left: '0%',
					ease: Power1.easeNone 
				});

				if ($(window).width() <= 480 ) {
					TweenLite.to(grid, -1, { css: { 
							"-webkit-transform" : "translate3d(85%, 0px, 0px)", 
							"-moz-transform" : "translate3d(85%, 0px, 0px)", 
							"-ms-transform" : "translate3d(85%, 0px, 0px)", 
							"-o-transform" : "translate3d(85%, 0px, 0px)", 
							"transform" : "translate3d(85%, 0px, 0px)" 
						}, 
						ease: Power1.easeNone
					})
				} else {
					TweenLite.to(grid, -1, { css: { 
							"-webkit-transform" : "translate3d(50%, 0px, 0px)", 
							"-moz-transform" : "translate3d(50%, 0px, 0px)", 
							"-ms-transform" : "translate3d(50%, 0px, 0px)", 
							"-o-transform" : "translate3d(50%, 0px, 0px)", 
							"transform" : "translate3d(50%, 0px, 0px)" 
						}, 
						ease: Power1.easeNone
					});
				}

				TweenLite.to(bio, 1, { opacity: 1, delay: 0.3, ease: Power1.easeNone});
				TweenLite.to(imgBg, 1, { opacity: 1, delay: 0.6, ease: Power1.easeNone});
				aside.addClass('show');	
			}
		});

		$(document).click(function (e) {
	    var container = $(".aside-toggle, #fh5co-aside");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('#fh5co-aside').hasClass('show') ) {
	      	container.trigger('click');
	      }
	    }
		});

	}

	var buttonsCustom = function() {
		$('.btn-circle a').each(function(){
			var $this = $(this),
				span = $this.find('> span'),
				em = $this.find('> em');

			span.text(em.text());

		})
	}



	
	$(function(){
		addFolders();
		// contentWayPoint();
		isotopeImageLoaded();
		toggleAside();
		buttonsCustom();
	});

}());