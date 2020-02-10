$(document).ready(function () {
    $.ajax({

        type: 'GET',

        url: '../Gallary/folderNames.csv',

        dataType: 'text',

        error: function (e) {
            alert('An error occurred while collecting photos');
            console.log("API call Failed: ", e);
        },

        success: function (data) {
            var jsonData = $.csv.toObjects(data);
            $.each(jsonData, function (index, value) {
                var im = value["FolderContents"]
                var img_location = decodeURIComponent(im.split(',')[Math.floor(Math.random() * Number(value["FolderContentCount"]))]).replace('[','');
                img_location = img_location.replace(']','');
                
                if (navigator.platform.startsWith('Linux') == true){
                    img_location = img_location.replace('./','../Gallary/');        
                } else {
                    img_location = img_location.replace('.\\','..\\Gallary\\');
                }
                
                console.log(img_location)                
                $('.grid').append(
                    '<div class="grid-item item animate-box" data-animate-effect="fadeIn">'+
                        '<a class="link_img" text="'+value["FolderName"]+'">'+
                            '<div class="img-wrap">'+
                                '<img src="'+img_location.replace(/'/g,"")+'" alt="" class="img-responsive">'+
                            '</div>'+
                            '<div class="text-wrap">'+
                                '<div class="text-inner">'+
                                    '<div>'+
                                        '<h2>'+value["FolderName"]+'</h2>'+
                                        '<span>'+value["FolderContentCount"]+' Photos'+'</span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</a>'+
                    '</div>'
                );				
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

        } // end: Ajax success API call

    });
    $(document).on('click', '.link_img', function (valu) {
        var queryString = "?para1=" + $(this).attr('text');
        window.location.href = "single.html" + queryString;
    });
});