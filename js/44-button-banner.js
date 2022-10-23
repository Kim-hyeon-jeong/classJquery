$(function(){
    $(".pager>li").click(function(){
        var sNum=$(this).index();
        //sNum : select Num

        $(this).addClass("active").siblings().removeClass("active");

        $(".banner").stop().animate({
            //배운것 제외하고는 다 animate를 쓴다
            "margin-left":-sNum*100+"%"
        },1000)
    })
})