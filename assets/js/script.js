// Current date on Jumbotron
var currentDay = $("#currentDay")
    .text(moment().format('dddd, MMMM Do YYYY'));
$(".lead").append(currentDay);

// Time block past, present and future checks
var timeBlock = $(".row textarea[type=text]");

$(timeBlock).each(function () {
    var timeNow = moment().format("k");
    var blockTime = parseInt($(this).attr("id"));

    if (blockTime < timeNow) {
        $(this).addClass("past");
        // $(this).removeClass("present");
        // $(this).removeClass("future");
    } else if (blockTime === timeNow) {
        $(this).addClass("present");
        // $(this).removeClass("past");
        // $(this).removeClass("future");
    } else if (blockTime > timeNow) {
        $(this).addClass("future");
        // $(this).removeClass("present");
        // $(this).removeClass("past");
    }
});


// Save textarea events to localStorage
$(".saveBtn").click(function () {
    event.preventDefault();

    // get textarea values
    var eventText = $(this).attr("hour");
    var eventTime = $(this).prev().val();

    localStorage.setItem(eventText, JSON.stringify(eventTime));
});

// Get items from localStorage

$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
