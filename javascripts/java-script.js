
document.addEventListener("DOMContentLoaded", function() {
    

    

    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready, только для vanila js
});

// замена заголовка

$(document).ready(function() {
    $('.fallinglettersfirst').click(function(){
        $(this).css({opacity: 0});
        $('.fallingletterssecond').css({opacity: 0});
        $('.fallinglettersthird').css({opacity: 0});
        $('.head').css({display:'none'});
        $('.headtwo').css({display:'block'});
    });
});
//замена режиссера
$(document).ready(function() {
    $('.letterfallfirst').click(function(){
        $(this).css({opacity: 0});
        $('.letterfallsecond').css({opacity: 0});
        $('.where').css({display:'none'});
        $('.wheretwo').css({display:'block'});
    });
});

//замена сценарий

$(document).ready(function() {
    $('.letterfallthird').click(function(){
        $(this).css({opacity: 0});
        $('.scenario').css({display:'none'});
        $('.scenariotwo').css({display:'block'});
    });
});

//замена мы не успеваем

$(document).ready(function() {
    $('.firstfall').click(function(){
        $(this).css({opacity: 0});
        $('.secondfall').css({opacity: 0});
        $('.strokefirst').css({display:'none'});
        $('.strokefirsttwo').css({display:'block'});
    });
});



//замена гример

$(document).ready(function() {
    $('.thirdfall').click(function(){
        $(this).css({opacity: 0});
        // $('.thirdfall').css({opacity: 0});
        $('.strokesecond').css({display:'none'});
        $('.strokesecondtwo').css({display:'block'});
    });
});

//замена сломалось

$(document).ready(function() {
    $('.fallletterlastone').click(function(){
        $(this).css({opacity: 0});
        $('.broken').css({display:'none'});
        $('.brokentwo').css({display:'block'});
    });
});

 //замена дверь

$(document).ready(function() {
    $('.falllastletter').click(function(){
        $(this).css({opacity: 0});
        $('.door').css({display:'none'});
        $('.doortwo').css({display:'block'});
    });
});

//игра цветок
$(document).ready(function() {
    $(".firstpetal, .secondpetal, .thirdpetal, .fourthpetal, .fifthpetal").draggable();
        $(".deskflo").droppable();
});

//игра ЛИСТ

$(document).ready(function() {
    $(".list").draggable();
        $(".listbox").droppable();
});

//МАЛО ВРЕМЕНИ

$(document).ready(function() {
    $('.fallinglettersfirstsmall').click(function(){
        $(this).css({opacity: 0});
        $('.fallingletterssecond').css({opacity: 0});
        $('.fallinglettersthird').css({opacity: 0});
        $('.headsmall').css({display:'none'});
        $('.headsmalltwo').css({display:'block'});
    });
});

$(document).ready(function() {
    $('.letterfallfirstsmall').click(function(){
        $(this).css({opacity: 0});
        $('.letterfallfirdsmall').css({opacity: 0});
        $('.wheredop').css({display:'none'});
        $('.wheredoptwo').css({display:'block'});
    });
});


$(document).click(function() {
    $('.flowerfirst').css({
        'animation-play-state': "paused"
    });
});

$(document).click(function() {
    $('.miniflo').css({
        'animation-play-state': "paused"
    });
});

$(document).click(function() {
    $('.firstflo').css({
        'animation-play-state': "paused"
    });
});

$(document).click(function() {
    $('.flolistflo').css({
        'animation-play-state': "paused"
    });
});






