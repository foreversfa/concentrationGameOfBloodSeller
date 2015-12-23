

function start() {
    $('h1').fadeOut();
    $('.button').fadeOut();
    $('.container').delay(500).show(500);
    $('.new-btn').delay(200).show(500);
    $('#bgm').get(0).currentTime=0;
    //$('#bgm').get(0).play();
    $('#drop').get(0).volume = 0.5;
    $('#ding').get(0).volume = 0.5;
    $('#fill').get(0).volume = 0.4;
    // $('.side').prepend('
    // <input type="button" class="button" value="Start Over" name="b" onClick="start()">');
    init();
}


function end(){
    $('#bgm').get(0).pause();
    if(hp<0){
        
        $('.container').hide(800);
        $('.ending').delay(1000).show(200);
        $(".ending").html('<h2>Here is your journey of selling blood. </h2>'+'<div class="endingtext"><div class="innertext">'+$(".text").html()+'</div></div>');
        // $('.text').clone().appendTo('.ending');
        $('.ending').append('<br><p><span>Sorry, you are dying because selling too much blood in your early life</span></p>');
        $('.ending').append('<p>Try <a onClick="start()" style="cursor:pointer">another</a> life! </p>');
    }
    else if(gamepath==secret){
        
        $('.container').hide(800);
        $('.ending').delay(1000).show(200);
        $(".ending").html('<h2>Here is your journey of selling blood. </h2>'+'<div class="endingtext">'+$(".text").html()+'</div>');
        $('.ending').append('<br><p id="secretending">Secret Ending:</p>');
        $('.ending').append('<div class="secret"><p>You have lived exactly the same life as Xu Sanguan. When you get old, your three kids all start their families. You have nothing to worry about. One day, by-passing a blood merchant stall, you suddenly want to sell your blood again, only for yourself. The blood merchant, sitting inside the stall, only gave you a contemptuous glance, saying, </p>');
        $('.ending').append('<p>"Stop that, old man. No one want your blood!"</p></div>');
        $('.ending').append('<p>If you want to know more about this book, go to <a href="https://en.wikipedia.org/wiki/Chronicle_of_a_Blood_Merchant">here</a>.')
    }

    else{
        
        $('.container').hide(800);
        $('.ending').delay(1000).show(200);
        
        $(".ending").html('<h2>Here is your journey of selling blood. </h2>'+'<div class="endingtext">'+$(".text").html()+'</div>');
        $('.ending').append('<br><p>You live a happy life with your family. At your 99 birthday, you reflect on your whole life, with tears in your face...<span>Congradulation!</span> </p>');
    }
}