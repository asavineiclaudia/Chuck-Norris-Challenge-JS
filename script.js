
$(document).ready(onHtmlLoaded);
//function(){callApi();}
//document.addEventListener("DOMContentLoaded", onHtmlLoaded);
function onHtmlLoaded() {
    callApi();
    // callApiPromises();
    var jokes = document.getElementById('button');
             jokes.addEventListener("click", function(event) {
                  callApi();
                //   callApiPromises();
              });
}

function callApi(){
    var apiUrl = 'https://api.chucknorris.io/jokes/random';
    $.ajax({
           url: apiUrl,
           method: 'GET',
           success: function(response) {
               renderResponse(response);
           }
       });
}


function renderResponse(response){
    var data = response;
    var divToPopulate = document.getElementById('jokes');
    var HTML = '<div> <img src="'+  data["icon_url"] +'"'
              +'<p>' + data["value"] + '</p> </div>';
      
    divToPopulate.innerHTML = HTML;
    
}
