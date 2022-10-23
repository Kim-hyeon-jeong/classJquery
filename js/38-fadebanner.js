$(function(){
    $(".pager>li").click(function(){
        var sNum = $(this).index();
        console.log(sNum);
        $(this).addClass("active").siblings().removeClass("active");
        
        $(".banner>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
    })
})