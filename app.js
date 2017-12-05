$(document).ready( function(){

	var topics= ["cheese","hotdogs","fries"];
console.log(topics);

    function displayButtons(){ 
    	$('#foodButtons').empty();
    	for (var i=0; i<topics.length;i++){


    		var button= $('<button>');
            button.text(topics[i]);
            button.attr('data-name',topics[i]);
            button.attr('class',"button");

            $('#foodButtons').append(button);

    	}
    };

    displayButtons();



	$('#submit').on('click', function(){
      var searchTerm= $("#graphics").val().trim();

     topics.push(searchTerm);

     displayButtons();

	});

function giftControls(){
      var state = $(this).attr("data-state");
      
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }




}


 function runquery(baseurl){

var searchTerm =$(this).attr('data-name');
var baseurl = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key=a8xwDiHFsv1UAL65M0SkCElilPmic9Yo&limit=10&offset=0&rating=G&lang=en";



$.ajax({url:baseurl,method:"GET"})

.done(function(response){



 for (var i = 0; i < response.data.length; i++){

var images= $('<img>');
            
            images.attr('src',response.data[i].images.fixed_height_still.url);
            images.attr('data-still',response.data[i].images.fixed_height_still.url);
            images.attr('data-animate',response.data[i].images.fixed_height.url);

images.attr('class','gif');


            $('#pics').prepend(images);


 }
            

           // console.log (response.data[i]);


})



}
$(document).on("click",".button",runquery);



$(document).on("click",'.gif', giftControls);
   
    








});

 
