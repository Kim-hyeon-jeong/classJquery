$(function(){
    $(".thum>li").click(function(){
        var sNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");

        $(".banner>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
        $("h1").text("쿵푸"+(sNum+1));

        // 제목변경
        var $alt = $(this).find("img").attr("alt");
        $(h1).text($alt);
    })

    $(".banner>li img").click(function(){
        var src=$(this).attr("src");
        //화면의 너비
        var bgWidth = $(".bg").outerWidth();
        var bgHeight = $(".bg").outerHeight();
        var bigWidth = $(".bigImg").outerWidth();
        var bigHeight = $(".bigImg").outerHeight();

        var $left = (bgWidth-bigWidth)/2;
        var $top = (bgHeight-bigHeight)/2;


        $(".bigImg").css({
            "background-image":"url("+src+")",
            "background-repeat":"no-repeat",
            "background-size":"100%", 
            // 이미지 아니므로 백그라운드 사이즈 이미지면 width:100%
            //left 50 transsform translatex -50%도 가능하지만 다른방법써보기
            "left" : $left,
            "top" : $top

        })
        $(".bg").fadeIn(1000);
        $(".bigImg").slideDown(1000);
    })

    $(".bigImg, .bg").click(function(){
        $(".bg").fadeOut(500);
        $(".bigImg").slideUp(500);
    })

})