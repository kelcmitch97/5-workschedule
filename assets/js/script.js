// Current date on Jumbotron
var currentDay = $("#currentDay")
.text(moment().format('dddd, MMMM Do YYYY'));
$(".lead").append(currentDay);

// Save textarea events to localStorage
$(".saveBtn").on("click", function() {
    // get textarea values
    var eventText = $(".description").val();

   localStorage.setItem("eventText", JSON.stringify(eventText));
});

// Time block past, present and future checks
function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).addClass("past");
        } else if (blockTime === timeNow) {
            $(this).addClass("present"); 
        } else {
            $(this).addClass("future");
        }
    })
};

// Get text from localStorage
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));

timeTracker();