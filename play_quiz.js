var option_check_ticks = document.getElementsByClassName("option_check_tick");
var options = document.getElementsByClassName("option");
var play_quiz_timers =document.getElementsByClassName("play_quiz_timer");
var n=[0,0,0,0];
var timeleft=10;
play_quiz_timers[0].innerHTML=timeleft;
var downloadTimer =setInterval(function(){
    timeleft--;
    play_quiz_timers[0].innerHTML=timeleft;
    if(timeleft<=0)
      clearInterval(downloadTimer);
    },1000);
$(document).on('click',".option",function(){
    var index = $.inArray(this,options);
    if(n[index]==0){
        option_check_ticks[index].style.display="block";
        n[index]=1;
    }
    else{
        option_check_ticks[index].style.display="none";
        n[index]=0;
    }
})
