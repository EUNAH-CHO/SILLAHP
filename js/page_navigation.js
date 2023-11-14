'use strict';

var numberOfItem = $("#loop tbody tr").length;
var limitPerPage = 10;

// SHOW FIRST PAGE
$("#loop tbody tr:gt(" + (limitPerPage - 1) + ")").hide();

var totalPages = Math.ceil(numberOfItem / limitPerPage);

// ADD PAGE NUMBER 1
$(".pagination").append("<li class='current-page active navi-one'><a href='javascript:void(0);'>" + 1 + "</a></li>");

// LOOP FORM PAGE 2 AND ADD ALL PAGES
for (var i = 2; i <= totalPages; i++) {
    $(".pagination").append("<li class='current-page'><a href='javascript:void(0);'>" + i + "</a></li>");
}

// ADD NEXT PAGE
$(".pagination").append("<li id='next-page' class='navi-next'><a href='javascript:void(0)'><span>Next</span></a></li>");


// FUNCTION ON CLICK FOR PAGE NUMBER
$(".pagination li.current-page").on("click", function() {

    if ($(this).hasClass("active")) {
        return false;
    } else {
        var currentPage = $(this).index();
        
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $("#loop tbody tr").hide();

        findGrandTotal(currentPage);

    }
});


// NEXT PAGE
$("#next-page").on("click", function () {
    var currentPage = $(".pagination li.active").index();
    
    if (currentPage === totalPages) {
        return false;
    } else {
        currentPage++;
        $(".pagination li").removeClass("active");
        $("#loop tbody tr").hide();

        findGrandTotal(currentPage);

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");

    }
});


//PREVIOUS PAGE
$("#previous-page").on("click", function () {
    var currentPage = $(".pagination li.active").index();
    
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $(".pagination li").removeClass("active");
        $("#loop tbody tr").hide();

        findGrandTotal(currentPage);

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");

    }
});


function findGrandTotal(currentPage) {
    var grandTotal = limitPerPage * currentPage;
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
        $("#loop tbody tr:eq(" + i + ")").show();
    }
}

// Hide Previous, Next and navi-one if show only one page
if (numberOfItem <= limitPerPage) {
    $(".pagination .navi-previous").hide();
    $(".pagination .navi-next").hide();
    $(".pagination .navi-one").hide();
}
