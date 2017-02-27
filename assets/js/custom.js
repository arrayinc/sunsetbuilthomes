$(document).ready(function() {
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
      modalClick("#galvestonmodal", "modalModelGalveston.html");
  });

  $("#lakewoodlink").click(function(){
    modalClick("#lakewoodmodal", "modalModelLakewood.html");
  });

  $("#crestwoodlink").click(function(){
    modalClick("#crestwoodmodal", "modalModelCrestwood.html");
  });

  $("#riversidelink").click(function(){
    modalClick("#riversidemodal", "modalModelRiverside.html");
  });

  $("#firesidelink").click(function(){
    modalClick("#firesidemodal", "modalModelFireside.html");
  });

  $("#saratogalink").click(function(){
    modalClick("#saratogamodal", "modalModelSaratoga.html");
  });

  $("#kitchenlink").click(function(){
    modalClick("#kitchenmodal", "modalFinishKitchen.html");
  });

  $("#bedroomlink").click(function(){
    modalClick("#bedroommodal", "modalFinishBed.html");
  });

  $("#bathroomlink").click(function(){
    modalClick("#bathroommodal", "modalFinishBath.html");
  });

  $("#livingroomlink").click(function(){
    modalClick("#livingroommodal", "modalFinishLiving.html");
  });

  $('a[href*="#"]:not([href="#"],[href="#carousel-2"],[href="#carousel-3"],[href="#carousel-4"],[href="#carousel-5"],[href="#carousel-6"],[href="#carousel-7"],[href="#carousel-8"],[href="#carousel-9"],[href="#carousel-10"],[href="#carousel-11"])').click(carouselClick);

  // $('#balloon').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
  //   console.log('Animation complete');
  //   $('#balloon').effect("bounce", { times:10 }, 10000);
  // });
});

// Click to scroll
function modalClick(modalId, modalFile) {
  $.ajax({
    url: modalFile,
    dataType: 'text',
    success: function(data) {
      //alert(data);
      $(modalId + " .modal-content").html(data);
      $(modalId).modal("show");
    }
  });
}

function carouselClick() {
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
}
