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
var gif = [];
var apiKey = "VuA1y06eBzaaE3FaXF9bbb1ry5tUts9u";
var button = "";
var buttonName = "";



//this creates the buttons 
function createButtons() {

    for (var i = 0; i < singers.length; i++) {
        var button = $("<button>");
        button.addClass("singerSearchButton btn btn-default ");
        button.attr("data-input", singers[i]);
        button.text(singers[i]);
        $("#gifButtons").append(button);
    }

}
// //this calls the function to create the button
createButtons();

$("#singerSearchButton").on("click", function (event) {

    //prevent page from runing script and run what follows
    event.preventDefault();

    //adds the value of add singer to the variable searchSinger
    var searchSinger = $("#addSinger").val().trim();
    console.log(searchSinger);

    //adds the a new button which is styled by css and has the input data of searchSinger
    var buttonAdded = "<button type = 'button' class='btn btn-default singerSearchButton' id='styleButton' data-input = '" + searchSinger + "'>" + searchSinger + "</button>";

    //takes the buttons and prepends it to the other buttons 
    $("#gifButtons").prepend(buttonAdded);
    singers.push(searchSinger);
    assignHandler();


});
function assignHandler() {
    $(".singerSearchButton").on("click", function () {

        //empty out existing gif inages 
        $("#gifs").empty();

        //define
        giphySearch = $(this).attr("data-input");
        console.log(giphySearch);

        //tell the browser what queryURL you want to use
        queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphySearch + "&api_key=VuA1y06eBzaaE3FaXF9bbb1ry5tUts9u&rating=g&limit=10&lang=en";

        //run the ajax function 
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            //when ajax is done, get a response
            .done(function (response) {

                //run a for loop so that it displays the gif image for each button when you click it
                for (var i = 0; i < 10; i++) {

                    //create a div to hold the images in
                    var gifDiv = $("<div>");

                    //create the actual image tag to house the image
                    var gifImgVar = $("<img>");

                    //finding the source to bring the image from the api
                    var imgSource = response.data[i].images.fixed_height_still.url
                    console.log(response.data[i]);

                    //set image to gifImgVar
                    gifImgVar.attr("src", imgSource);

                    //append the gifs from imgSource to the DOM
                    $("#gifs").append(gifImgVar);
                }

                // imagesClicked 
                // check if still
                //if still, animate
                //if animate, still



            })

    })
}
assignHandler();

//add buttons to the html page





