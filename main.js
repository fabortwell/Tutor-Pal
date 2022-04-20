$(document).ready(function() {
    var item, tile, author, publisher, bookLink, bookImg;
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    var apiKey = "key=AIzaSyDtXC7kb6a7xKJdm_Le6_BYoY5biz6s8Lw";
    var placeHldr = '<img src="https://via.placeholder.com/150">';
    var searchData;
    /*adding an event listener to the search button*/
    $("#search").click(function() {
        outputList.innerHTML = ""; //empty html output
        document.body.style.backgroundImage = "url('')";
         searchData = $("#search-box").val();
         //handling empty search input field
         if(searchData === "" || searchData === null) {
           displayError();
         }
     