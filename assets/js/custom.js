/**	
	* Template Name: Biziness
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FIXED MENU
	2. FEATURED SLIDE ( SLICK SLIDER )
	3. MENU SMOOTH SCROLLING
	4. PORTFOLIO GALLERY
	5. GOOGLE MAP
	6. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	7. CLIENT TESTIMONIALS ( SLICK SLIDER )
	
**/



(function( $ ){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.navbar .navbar-brand img').attr('src','/assets/Logos/Valuestream-Logo-white.png');
		}
		if ($(this).scrollTop() < 150) {
			$('.navbar .navbar-brand img').attr('src','/assets/Logos/Valuestream-Logo-200.png');
		}
	})
/*===========================================================================================================*/
/*===========================================================================================================*/

	var folder1 = "Top Slider/";
	$.ajax({
        type: 'GET',
        url : folder1,
        success: function (data) {
            // console.log(data)
            // $('.mu-featured-slider-single').remove()
            $(data).find("a").attr("href", function (i, val1) {
                if( val1.match(/\.jpg|\.jpeg|\.JPEG|.JPG/) ) { 
					console.log(decodeURIComponent(val1))
					const main_text = decodeURIComponent(val1).split('^')[0]
					const sub_text = decodeURIComponent(val1).split('^')[1].replace(/.jpg|.jpeg|.JPEG|.JPG/g,'')
					// str.replace(/#|_/g,'');
                    $('.mu-featured-slide').append( 
                        '<div class="mu-featured-slider-single">'+
                            '<img src="'+ folder1 + val1 +'">'+
                            '<div class="mu-featured-slider-content">'+
                                '<h1>'+main_text+'</h1>'+
                                '<p>'+sub_text+'</p>'+
                                // '<a href="#" class="mu-primary-btn">CONTACT US</a>'+
                            '</div>'+
                        '</div>'
                    );
				}
				
			});
			$('.mu-featured-slide').slick({
				arrows: true,
				dots: true,
				infinite: true,
				speed: 500,
				autoplay: true,
				cssEase: 'linear',
			  });
        }
	});
	
/*===========================================================================================================*/
/*===========================================================================================================*/
	var folder2 = "Our Clients/";
	$.ajax({
        type: 'GET',
        url : folder2,
        success: function (data) {
            // console.log(data)
            // $('.mu-featured-slider-single').remove()
            $(data).find("a").attr("href", function (i, val2) {
                if( val2.match(/\.jpg|\.jpeg|\.png|\.JPEG|\.JPG|\.PNG/) ) { 
                    $('.mu-clients-content').append( 
                        '<div class="col-sm-6 col-md-2">'+
							'<div class="mu-clients-content-single">'+
							// '<img src="'+ folder + val +'">'+
								'<img src="'+folder2+val2+'" alt="brand image">'+
                            '</div>'+
                        '</div>'
                    );
				}
				
			});
			$('.mu-clients-content').slick({
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 2,
				dots: false,
				infinite: true,
				speed: 200,
				autoplay: true,
				cssEase: 'linear',
			  });
        }
    });
/*===========================================================================================================*/
/*===========================================================================================================*/

/*===========================================================================================================*/
/*===========================================================================================================*/
var folder3 = "Our Team/";
$.ajax({
	type: 'GET',
	url : folder3,
	success: function (data) {
		
		$(data).find("a").attr("href", function (i, val3) {
			if( val3.match(/\.jpg|\.jpeg|\.JPEG|\.JPG/) ) { 
				const name_text = decodeURIComponent(val3).split('^')[0]
				const position_text = decodeURIComponent(val3).split('^')[1].replace(/.jpg|.jpeg|.JPEG|.JPG/g,'')
				$('.mu-team-content').append( 
					'<div class="col-sm-6 col-md-4">'+
						'<div class="mu-team-content-single">'+
							'<div class="mu-team-profile">'+
								'<img src="'+folder3+val3+'" alt="team member">'+
							'</div>'+
							'<div class="mu-team-info">'+
								'<h4>'+name_text+'</h4>'+
								'<span>'+position_text+'</span>'+
							'</div>'+
						'</div>'+
					'</div>'
				);
			}
			
		});
		$('.mu-team-content').slick({
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 2,
			dots: false,
			infinite: true,
			speed: 200,
			autoplay: true,
			cssEase: 'linear',
		  });
	}
});
/*===========================================================================================================*/
/*===========================================================================================================*/

/*===========================================================================================================*/
/*===========================================================================================================*/
var folder4 = "Monthly Toppers/";

{/* <div class="col-md-3 col-sm-6">
	<div class="mu-single-counter">
		<i class="icon-like"></i>
		<div class="counter-value" data-count="750">0</div>
		<h5 class="mu-counter-name">Projects Completed</h5>
	</div>
</div> */}
$.ajax({
	type: 'GET',
	url : folder4,
	success: function (data) {
		
		$(data).find("a").attr("href", function (i, val4) {
			if( val4.match(/\.jpg|\.jpeg|\.JPEG|\.JPG/) ) { 
				const Mname_text = decodeURIComponent(val4).split('^')[0]
				const Mposition_text = decodeURIComponent(val4).split('^')[1].replace(/.jpg|.jpeg|.JPEG|.JPG/g,'')
				$('.mu-counter-block').append( 
					'<div class="col-sm-6 col-md-3">'+
						'<div class="mu-single-counter">'+
							'<div class="mu-team-profile2">'+
								'<img src="'+folder4+val4+'" alt="team member">'+
							'</div>'+
							'<div class="mu-team-info2">'+
								'<h4>'+Mname_text+'</h4>'+
								'<span>'+Mposition_text+'</span>'+
							'</div>'+
						'</div>'+
					'</div>'
				);
			}
			
		});
		$('.mu-counter-block').slick({
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 2,
			dots: false,
			infinite: true,
			speed: 200,
			autoplay: true,
			cssEase: 'linear',
		  });
	}
});
/*===========================================================================================================*/
/*===========================================================================================================*/
	

	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('#mu-header').addClass('mu-fixed-nav');
        
	    } else {
	        $('#mu-header').removeClass('mu-fixed-nav');
	    }
	});

		
	/* ----------------------------------------------------------- */
	/*  2. FEATURED SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	

		


	/* ----------------------------------------------------------- */
	/*  3. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".mu-menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }           
		})


	/* ----------------------------------------------------------- */
	/*  4. PORTFOLIO GALLERY
	/* ----------------------------------------------------------- */ 
		// $('.filtr-container').filterizr();
		//Simple filter controls

	    $('.mu-simplefilter li').click(function() {
	        $('.mu-simplefilter li').removeClass('active');
			$(this).addClass('active');
			var csv_file_API = 'birthdays.csv';
			if(this.textContent == "January"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Jan') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "February"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Feb') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "March"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Mar') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "April"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Apr') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "May"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'May') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "June"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Jun') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "July"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Jul') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "August"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Aug') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "September"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Sep') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "October"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Oct') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "November"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Nov') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else if (this.textContent == "December"){
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						const mont = dt.split(' ')[1]

						if (mont == 'Dec') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			} else {
				getData();
				async function getData(){
					const response = await fetch(csv_file_API);
					const data = await response.text();
					
					const rows = data.split('\n').slice(1);
					$('#showCSV tr').remove()
					rows.forEach(ele =>{
						const row = ele.split(',')
						const dt = row[0]
						// const mont = dt.split(' ')[1]

						if (mont == 'Feb') {
							$('#showCSV').append(

								'<tr>' +
									'<th scope="row">' +
									'<span class="badge warning-color-dark badge-pill">' +
										row[0] +
									'</span>'+
									'</th>' + 
									'<td>' +
									'<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
										row[1] +
									'</span>'+
									'</td>' +  
									'<td>' +
										'<span class="badge badge-primary badge-pill p-2">' +
											row[2] +
										'</span>' +
									'</td>' +
								'</tr>'
							);
						}
					})
				}
			}
	    });
	
	/* ----------------------------------------------------------- */
	/*  5. GOOGLE MAP
	/* ----------------------------------------------------------- */ 
		    
	    $('#mu-google-map').click(function () {
		    $('#mu-google-map iframe').css("pointer-events", "auto");
		});
		
		$("#mu-google-map").mouseleave(function() {
		  $('#mu-google-map iframe').css("pointer-events", "none"); 
		});
		
		

	/* ----------------------------------------------------------- */
	/*  6. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	/* ----------------------------------------------------------- */ 

	$('.mu-imglink').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-fade',
	  gallery:{
	    enabled:true
	  }
	});

	/* ----------------------------------------------------------- */
	/*  7. CLIENT TESTIMONIALS (SLICK SLIDER)
	/* ----------------------------------------------------------- */

		$('.mu-testimonial-slide').slick({
		  arrows: false,
		  dots: true,
		  infinite: true,
		  speed: 500,
		  autoplay: true,
		  cssEase: 'linear'
		});


	
	
})( jQuery );


  
	