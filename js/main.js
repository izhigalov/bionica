  $(document).ready(function(){
$('.modal-dialog button[type="submit"]').on('click',function(){
   var phone = $('input[type="tel"]').val();
    var name = $('input[type="text"]').val();
    if(phone!=''){
      var x1 = $('button[name="btt"]').val();
     $.ajax({
     url: 'submit.php',
      type: 'post',
      data: {phone:phone, name: name},
      success: function(data){
        dataLayer.push({'event':"eventTarget_low", "eventCategory":"target_low", "eventAction":x1, "evetLabel":""});
      $('.modal-dialog .form-result').css({"display":"block","background-color":"green","padding":"10px","marginbottom":"15px","color":"#fff","border-radius":"4px","font-size":"14px"}).html('Ваше сообщение успешно отправлено!');
       $('.modal-dialog input[type="tel"]').val('');
       $('.modal-dialog input[type="text"]').val('');
       $('.modal-dialog button[type="submit"]').prop( "disabled", true );
      }
        });
      }
      else{
      $('.modal-dialog .form-result').css({"display":"block","background-color":"red","padding":"10px","margin-bottom":"15px","color":"#fff","border-radius":"4px","font-size":"14px"}).html('Необходимо заполнить поля!');
                            }
                return false;
                   });

$('.modal-dialog .close').on('click',function(){
  $('.modal-dialog .form-result').hide();
    $('.modal-dialog button[type="submit"]').prop( "disabled", false );
   });


   $('.modal-dialog2 button[type="submit"]').on('click',function(){
      var phone = $('.modal-dialog2 input[type="tel"]').val();
       var name = $('.modal-dialog2 input[type="text"]').val();
       if(phone!=''){
         var x1 = $('button[name="btt"]').val();
        $.ajax({
        url: 'submit.php',
         type: 'post',
         data: {phone:phone, name: name},
         success: function(data){
           dataLayer.push({'event':"eventTarget", "eventCategory":"target", "eventAction":x1, "evetLabel":""});
         $('.modal-dialog2 .form-result').css({"display":"block","background-color":"green","padding":"10px","marginbottom":"15px","color":"#fff","border-radius":"4px","font-size":"14px"}).html('Ваше сообщение успешно отправлено!');
          $('.modal-dialog2 input[type="tel"]').val('');
          $('.modal-dialog2 input[type="text"]').val('');
          $('.modal-dialog2 button[type="submit"]').prop( "disabled", true );
         }
           });
         }
         else{
         $('.modal-dialog2 .form-result').css({"display":"block","background-color":"red","padding":"10px","margin-bottom":"15px","color":"#fff","border-radius":"4px","font-size":"14px"}).html('Необходимо заполнить поля!');
                          }
                   return false;
                      });
        $('.modal-dialog2 .close').on('click',function(){
            $('.modal-dialog2 .form-result').hide();
              $('.modal-dialog2 button[type="submit"]').prop( "disabled", false );
            });

   $('.form-inline button[type="submit"]').on('click',function(){
   var phone1 = $(this).closest('.form-inline').find('input[type="tel"]').val();

    if(phone1!=''){
      var x1 = $('button[name="btt"]').val();
     $.ajax({
     url: 'submit.php',
      type: 'post',
      data: {phone:phone1},
      success: function(data){
        dataLayer.push({'event':"eventTarget", "eventCategory":"target", "eventAction":x1, "evetLabel":""});
       $('.form-inline .form-result1').css({"display":"block","background-color":"green","padding":"10px","margin-bottom":"15px","color":"#fff","border-radius":"4px","font-size":"14px"}).html('Ваше сообщение успешно отправлено!');
       $('.form-inline input[type="tel"]').val('');
       $('.well-main-page').addClass("b-well-height__main-page");
       $('.well').addClass("b-well-height");
      }
        });
      }
      else{
        $('.form-inline .form-result1').css({"display":"block","background-color":"red","padding":"10px","margin-bottom":"15px","color":"#fff","border-radius":"4px","font-size":"14px"}).html('Укажите номер телефона');
        $('.well-main-page').addClass("b-well-height__main-page");
        $('.well').addClass("b-well-height");
       }
      return false;
                   });

     $('.bg-blue-light').click(function(){
       $('.modal-title').html("Подробнее о варианте Эконом");
       $('.modal-content button[name="btt"]').attr("value", "consult_econom");
     });

     $('.bg-blue').click(function(){
       $('.modal-title').html("Подробнее о варианте Норма");
       $('.modal-content button[name="btt"]').attr("value", "consult_norma");
     });

     $('.bg-green').click(function(){
       $('.modal-title').html("Подробнее о варианте Стандарт");
       $('.modal-content button[name="btt"]').attr("value", "consult_standart");
     });

     $('.callback').click(function(){
       $('.modal-title').html("Заказать звонок");
       $('.modal-content button[name="btt"]').attr("value", "back_call");
     });

     $('.form-control.input-lg.main-page-form').click(function(){
       $('button[name="btt"]').attr("value", "check_land");
     });

     $('.form-control.input-lg.second-page-form').click(function(){
       $('button[name="btt"]').attr("value", "discuss_task");
     });

     $('.form-control.input-lg.third-page-form').click(function(){
      $('button[name="btt"]').attr("value", "consult_general");
    });
    
    });

    jQuery(function($){
      $('input[type="tel"]').mask("+7(999) 999-99-99");
   });