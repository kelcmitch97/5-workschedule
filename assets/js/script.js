// Current date on Jumbotron
var currentDay = $("#currentDay")
.text(moment().format('dddd, MMMM Do YYYY'));
$(".lead").append(currentDay);

// Create Events
