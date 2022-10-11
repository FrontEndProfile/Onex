$(document).ready(function () {
    $('#example').DataTable();
});


$( ".detail-btn" ).click(function() {
    $(this).prev( ".farma-hidden" ).slideToggle();
    $(this).toggleClass("active");
    $(this).prev( ".farma-hidden" ).prev(".unlock-btn").toggleClass("active");
  });

  $( ".menu-icon" ).click(function() { 
    $(".nav").addClass("active"); 
  });

  $( ".nav-close" ).click(function() { 
    $(".nav").removeClass("active"); 
  });