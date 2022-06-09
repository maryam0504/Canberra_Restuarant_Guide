// JavaScript source code

$(document).ready(function () {

    $('.overlay2').hide();

   
    $(".q1").mouseenter(function () {
        
        $(this).find('.overlay2').show();
        


    });
    $(".q1").mouseleave(function () {
        
        $(this).find('.overlay2').hide();

    });
});
