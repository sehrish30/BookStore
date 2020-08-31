$(document).ready(function(){
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

      $(window).scroll(function(){
          let position = $(this).scrollTop();
          
          if(position>=350){
              $('.gallery').addClass('change');
          }else{
            $('.gallery').removeClass('change');
          }
      })
})