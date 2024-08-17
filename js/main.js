$(document).ready(function(){

   $('.sub-images > img').on("click mouseenter",function(){
    $(this).removeClass('active');
       var $images = $(this).attr('src');
       $('.main-image > img').attr('src', $images);

   });











    
    });