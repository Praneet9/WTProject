$(document).ready(function () {
   $(".tab").click(function () {
       var x = $(this).attr('id');
       if(x == 'signuptab'){
           $('#signintab').removeClass('select');
           $('#signuptab').addClass('select');
           $('#signupbox').fadeIn(600);
           $('#signinbox').fadeOut(0);
       }
       if(x == 'signintab'){
           $('#signuptab').removeClass('select');
           $('#signintab').addClass('select');
           $('#signupbox').fadeOut(0);
           $('#signinbox').fadeIn(600);
       }
   })
});

