var csv_file_API = 'birthdays.csv';
var csv_file_holiday = 'holidays.csv'
$(document).ready(function () {
    
    $.ajax({

        type: 'GET',

        url: csv_file_API,

        dataType: 'text',

        error: function (e) {
            alert('An error occurred while processing API calls');
            console.log("API call Failed: ", e);
        },

        success: function (data) {

            var jsonData = $.csv.toObjects(data);

            console.log(jsonData);

            $.each(jsonData, function (index, value) {

                
                $('#showCSV').append(

                    '<tr>' +
                        '<th scope="row">' +
                        '<span class="badge warning-color-dark badge-pill">' +
                            value['Date of Birth'] +
                        '</span>'+
                        '</th>' + 
                        '<td>' +
                      
                            value['Name'] +
                      
                        '</td>' +  
                        '<td>' +
                            '<span class="badge badge-primary badge-pill p-2">' +
                                value['Team'] +
                            '</span>' +
                        '</td>' +
                    '</tr>'
                );

    
                // $('#showCSV').append(

                //     '<li class="list-group-item d-flex justify-content-between align-items-center">' + 
                //     // Name,Address,Gender,Designation,Age
                //         '<span style="width: 15%; font-size: 1rem; font-weight: bold; color: #37474F">' +
                //             value['Name'] +
                //         '</span>' +

                //         '<span style="width: 15%; font-size: 1rem;  color: #37474F">' +
                //             value['Address'] +
                //         '</span>' +

                //         '<span class="badge warning-color-dark badge-pill">' +
                //             value['Gender'] +
                //         '</span>' +

                //         '<span class="badge success-color-dark badge-pill">' +
                //             value['Designation'] +
                //         '</span>' +

                //         '<span class="badge badge-primary badge-pill">' +
                //             value.Age +
                //         '</span>' +

                //         '<span class="badge badge-primary badge-pill">' +
                //             value.STATE +
                //         '</span>' +

                //     '</li>'
                // );

            });

        } // end: Ajax success API call

    });
    $.ajax({

        type: 'GET',

        url: csv_file_holiday,

        dataType: 'text',

        error: function (e) {
            alert('An error occurred while processing API calls');
            console.log("API call Failed: ", e);
        },

        success: function (data) {

            var jsonData = $.csv.toObjects(data);

            console.log(jsonData);

            $.each(jsonData, function (index, value) {

                
                $('#showCSVHoliday').append(

                    '<tr>' +
                        '<th scope="row">' +
                        
                            value['Slno'] +
                        
                        '</th>' + 
                        '<td>' +
                        '<span class="badge warning-color-dark badge-pill">' +
                            value['Date'] +
                        '</span>'+
                        '</td>' +  
                        '<td>' +
                            '<span class="badge badge-primary badge-pill p-2">' +
                                value['Day'] +
                            '</span>' +
                        '</td>' +
                        '<td>' +
                        '<span class="badge success-color-dark badge-pill">' +
                                value['Occation'] +
                            '</span>' +
                        '</td>' +
                    '</tr>'
                );
            });

        } // end: Ajax success API call

    });
 // end: of Ajax call
    
    
    
    // $(document).ready(function() {
    //     var files = {'jpg':4}, pageName = "d", container = $('#Home-Images');
    //     for (var ext in files)
    //     {
    //         for (var i = 0; i < files[ext]; i++)
    //         {
    //             var src = "../Images/D/allimages" + pageName + "-" + (i+1) + "."+ext ;
    //             var img = $('<img src="'+src+'" width=100 height=100 />'); 
    //             container.append($('<li/>').html($('<a/>', {'href':'#'}).html(img)));
    //         }
    //     }
    // }); 
    // $("div").each( function(i) {
    //     $(this).append("<img src='images/"+(++i)+".png' width='79' height='79' />");	
    //    });
       

}); // end: document.ready()