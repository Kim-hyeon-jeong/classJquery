$(function(){
    //#nav>li 에 마우스가 올라가면
    //.subBg slideDown .sub slideDown
    $("#nav>li").mouseover(function(){
        $(".subBg, .sub").stop().slideDown(300);
    })
    //#nav>li에 마우스 아웃되면 slideUp
    $("#nav>li").mouseout(function(){
        $(".subBg, .sub").stop().slideUp(300);
    })
})