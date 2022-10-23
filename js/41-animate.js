$(function(){
    //첫번째 버튼 클릭하면 .box 100,100,
    $("button:eq(0)").click(function(){
        $(".box").animate({
            "width":"100px",
            "height":100,
            //단위생략하면 px. 단위쓰려면 쌍따옴표넣기
            "opacity":0.5
        },500)
    })
    //두번째 버튼 클릭하면 50,50,1
    $("button:eq(1)").click(function(){
        $(".box").animate({
            "width":50,
            "height":50,
            "opacity":1
        },500)
    })

    //세번째 버튼 클릭하면 왼쪽에서 1000px
    //배경이 pink
    //easing효과
    $("button:eq(2)").click(function(){
        $(".box").animate({
            "margin-left":1000,
            "background-color":"pink",
            "width":200,
            "height":200
        },500,"easeOutElastic")
    })
    //4번째 버튼 margin-left:0, 배경은 skyblue, 간후에 사이즈변경되도록
    $("button:eq(3)").click(function(){
        $(".box").animate({
            "margin-left":0,
         },500,function(){
            $(this).animate({
                "background-color":"skyblue",
                width:50,
                height:50,
                opacity:1
            },500)
         }) //앞의 애니메이션 끝나면 펑션함수 실행하라(콜백함수)
    })
})