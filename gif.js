//array of singers that the user can choose from
var topics = [
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
var searchSinger = "";
var buttonAdded 


//this creates the buttons 
function createButtons() {
    for (var i = 0; i < topics.length; i++) {
        button += "<button type ='button' class = 'btn button-default' data-input = '" + topics[i] + " ' > " + topics[i] + "</button>";
        $("#gifButtons").html(button);
    }
}
// //this calls the function to create the button
createButtons();

// //add buttons to the html page
// $("#singerSearchButton").on("click", function (event) {

//     //prevent page from runing script and run what follows
//     event.preventDefault();

//     searchSinger = $("#addSinger").val();
//     buttonAdded = "<button type = 'button' class = 'btn btn-default button' data-input = '" + singerSearch + "'>" + singerSearch + "</button>";

//     $("#gifButtons").append(buttonAdded);
//     topics.push(singerSearch);



// })