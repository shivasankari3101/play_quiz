var option_check_ticks = document.getElementsByClassName("option_check_tick");
var options = document.getElementsByClassName("option");
var n=0;
$(document).on('click',".option",function(){
    var index = $.inArray(this,options);
    if(n==0){
        option_check_ticks[index].style.display="block";
        n=1;
    }
    else{
        option_check_ticks[index].style.display="none";
        n=0;
    }
})
