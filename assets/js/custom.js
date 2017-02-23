// Modals
$("#contactnav").click(function(){
    $("#contactmodal").modal("show");
});

$("#contactusnow").click(function(){
    $("#contactmodal").modal("show");
});

$("#contactusnow2").click(function(){
    $("#contactmodal").modal("show");
});

$("#galvestonlink").click(function(){
    $("#galvestonmodal").modal("show");
});

$("#lakewoodlink").click(function(){
    $("#lakewoodmodal").modal("show");
});

$("#crestwoodlink").click(function(){
    $("#crestwoodmodal").modal("show");
});

$("#riversidelink").click(function(){
    $("#riversidemodal").modal("show");
});

$("#firesidelink").click(function(){
    $("#firesidemodal").modal("show");
});

$("#saratogalink").click(function(){
    $("#saratogamodal").modal("show");
});

$("#kitchenlink").click(function(){
    $("#kitchenmodal").modal("show");
});

$("#bedroomlink").click(function(){
    $("#bedroommodal").modal("show");
});

$("#bathroomlink").click(function(){
    $("#bathroommodal").modal("show");
});

$("#livingroomlink").click(function(){
    $("#livingroommodal").modal("show");
});

// Click to scroll

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - $("#navbar").outerHeight(true)
      }, 1000);
      return false;
    }
  }
});