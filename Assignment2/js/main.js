// WEB303 Assignment 2

$(document).ready(function()
{
    $("#prospect").click(function()
    {
        $("#content").css("height","650");
        $('div#content').load("prospect.html").hide().slideToggle("fast");
    });
    
    $("#convert").click(function()
    {
        $("#content").css("height","650");
        $('div#content').load("convert.html").hide().slideToggle("fast");
    });
    
    $("#retain").click(function()
    {
        $("#content").css("height","650");
        $('div#content').load("retain.html").hide().slideToggle("fast");
    });
});