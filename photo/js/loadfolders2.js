$(document).ready(function(){
    var queryString = decodeURIComponent(window.location.search); //parsing
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    
    for (var i = 0; i < queries.length; i++)
    {
      document.write(queries[i] + "<br>");
    }
});