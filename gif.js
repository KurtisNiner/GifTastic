//array of singers that the user can choose from
var singers = [
    "Justin Timberlake",
    "The Weeknd",
    "Christina Aguilera",
    "Will Smith",
    "Michael Jackson",
    "Backstreet Boys",
    "Nsync",
    "Britney Spears",
    "Lionel Richie",
    "The Temptations"
]

//creating variables

var apiKey = "VuA1y06eBzaaE3FaXF9bbb1ry5tUts9u";
var button = "";
var buttonName = "";



//this creates the buttons 
function createButtons() {

    for (var i = 0; i < singers.length; i++) {
        var button = $("<button>");
        button.addClass("singerSearchButton btn btn-default");
        button.attr("data-input", singers[i]);
        button.text(singers[i]);
        $("#gifButtons").append(button);
    }
}
// //this calls the function to create the button
createButtons();

/////////
$("#singerSearchButton").on("click", function (event) {

    //prevent page from runing script and run what follows
    event.preventDefault();

    //adds the value of add singer to the variable searchSinger
    var searchSinger = $("#addSinger").val().trim();

    //adds the a new button which is styled by css and has the input data of searchSinger
    var buttonAdded = "<button type = 'button' class='btn btn-default singerSearchButton' data-input = " + searchSinger + ">" + searchSinger + "</button>";

    //takes the buttons and prepends it to the other buttons 
    $("#gifButtons").prepend(buttonAdded);
    singers.push(searchSinger);

});

///////

    $("#gifButtons").on("click",".singerSearchButton", function () {

        //empty out existing gif inages 
        $("#gifs").empty();

        //define
        var giphySearch = $(this).attr("data-input");
        console.log(giphySearch);

        //tell the browser what queryURL you want to use
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphySearch + "&api_key=VuA1y06eBzaaE3FaXF9bbb1ry5tUts9u&rating=g&limit=10&lang=en";

        //run the ajax function 
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            //when ajax is done, get a response
            .done(function (response) {

                //run a for loop so that it displays the gif image for each button when you click it
                for (var i = 0; i < 10; i++) {

                
               

                    //create the actual image tag to house the image
                    var gifImgVar = $("<img>");

                    //finding the source to bring the image from the api
                    var stillURL = response.data[i].images.fixed_height_still.url;

                    var animateURL = response.data[i].images.fixed_height.url;

                    
                    //set image to gifImgVar
                    gifImgVar.attr("src", stillURL);
                    gifImgVar.attr("state", "still");
                    gifImgVar.attr("stillURL", stillURL);
                    gifImgVar.attr("animateURL", animateURL);

                    //append the gifs from imgSource to the DOM
                    $("#gifs").append(gifImgVar);


                    gifImgVar.on("click", function(){
                        var state = $(this).attr("state");
                        var animateURL = $(this).attr("animateURL");
                        var stillURL = $(this).attr("stillURL");

                        if(state === "still"){
                            $(this).attr("state", "animate");
                            $(this).attr("src", animateURL);
                        }else if(state === "animate"){
                            $(this).attr("state", "still");
                            $(this).attr("src", stillURL);
                            
                        }

                       })

                }
           
            }) 
        
    })









