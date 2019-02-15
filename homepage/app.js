 $('.switch').click(function(){
        $('.btn').toggleClass('toggled');
    });
    $('.circle5').hover(function(){
        $('.circle5 span').css('display','inline-block');
    },function(){
        $('.circle5 span').css('display','none');
    });
    $('.row').hover(function(){
        $(this).css('cursor','pointer');
        $(this).children('#item1').css('background-color','#1abc9c');
        $(this).children('#item1').css('color','white');
       $(this).css('color','#1abc9c');
        
    },function(){
        $(this).children('#item1').css('background-color','white');
        $(this).children('#item1').css('color','#2c3e50');
        $(this).css('color','#2c3e50');
    });
    $('.row').click(function(){
        $(this).toggleClass('check_active');
    }) ;   
      
        $('.sidebar p a').click(function(){
            $('.sidebar p a').removeClass('act');
            $('.sidebar p a i').css('color','#ecf0f1');
            $('.sidebar p a').prev().css('display','none');
            $(this).addClass('act');
            $('i',this).css('color','#1abc9c');
            $(this).prev().css('display','inline-block');
        });