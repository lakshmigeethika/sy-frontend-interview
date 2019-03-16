// Please complete the below exercises preferrably using JQuery
$(document).ready(function(){

    // 1. Make each item's paragraph collapse/expand when the title is clicked
    $(".title").click(function () {
        console.log("clicked on title");
        $(this).siblings(".description").toggle();
        $(this).toggleClass("border-bottom");
    });

    // 2. Remove each item when we click on the closing X
    $(".close").click(function () {
        $(this).parent().remove();
        //removes from the DOM
    });
    
    // 3. Create a new item using the input field
    //    The title of the new item has to match the input value
    //    The new item should also have the same properties (collapse/expand and close) as the other items

    //    Optional:
    //    If the user clicks "Add New" and the input is empty,
    //    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
    //    depending on the number of items already on the page

    //even if the input is spaces - I set the title to default
    $(".add").click(function () {
        var newTitle = $("#newtitle").val().replace(/\s/g, '').length == 0 ? "Title " + ($(".item").length + 1) : $("#newtitle").val();
        var newItem = $(".item").eq(0).clone(true).appendTo(".item-list");;
        $(newItem).find(".title").html(newTitle);
        $("#newtitle").val(" ");

    });
});

















