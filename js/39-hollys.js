$(function(){
    $(".pager>li").click(function(){
        var sNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");

        $(".banner>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
    })
})