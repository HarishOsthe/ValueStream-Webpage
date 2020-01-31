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
	var folder = "assets/images/Top Slider/";
	$.ajax({
        type: 'GET',
        url : folder,
        success: function (data) {
			console.log("Script.js")
            // console.log(data)
            // $('.mu-featured-slider-single').remove()
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.jpg|\.jpeg/) ) { 
                    $('.mu-featured-slide').append( 
                        '<div class="mu-featured-slider-single">'+
                            '<img src="'+ folder + val +'">'+
                            '<div class="mu-featured-slider-content">'+
                                '<h1>WELCOME TO BIZINESS</h1>'+
                                '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever</p>'+
                                '<a href="#" class="mu-primary-btn">CONTACT US</a>'+
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
			  console.log("Custom.js")
        }
    });


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


  
	