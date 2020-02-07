$(document).ready(function(){
    var queryString = decodeURIComponent(window.location.search); //parsing
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    var img_location = '../Gallary/'+queries[0];
    img_location = img_location.replace('para1=','');
    console.log(img_location);

    $.ajax({

      type: 'GET',

      url: '../Gallary/folderNames.csv',

      dataType: 'text',

      error: function (e) {
          alert('An error occurred while processing API calls');
          console.log("API call Failed: ", e);
      },

      success: function (data) {
          var jsonData = $.csv.toObjects(data);

          $.each(jsonData, function (index, value) {			
              if (value["FolderName"] == queries[0].replace('para1=','')){
                var im = value["FolderContents"]
                im = im.replace(/\[|\]/g,'');
                im = im.replace(/'/g,'');
                im = im.split(',');

                im.forEach(element => {
                  img_loc = element.replace('./','../Gallary/');

                  console.log(img_loc)
                  $('.grid').append(
                    '<div class="grid-item item animate-box" data-animate-effect="fadeIn">'+
                      '<a href="'+img_loc+'" class="image-popup" title="Name of photo or title here">'+
                      '<div class="img-wrap">'+
                        '<img src="'+img_loc+'" alt="" class="img-responsive">'+
                      '</div>'+
                      '<div class="text-wrap">'+
                        '<div class="text-inner popup">'+
                          '<div>'+
                            '<h2>Name of photo or title here</h2>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</a>'+
                  '</div>'
                  );
                });
              }
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
    var magnifPopup = function() {
      $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it
  
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
  
          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
    };
  
    var magnifVideo = function() {
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
  
          fixedContentPos: false
      });
    };
  
    
  
  
    // Call the functions 
    magnifPopup();
    magnifVideo();

    } // end: Ajax success API call

  });
});