$(function(){
    //#nav>li를 클릭하면 해당메뉴는 active class를 가지고, 나머지 메뉴는 active class가
    //사라지게 한다.
    $("#nav>li>a").click(function(){
        console.log($(this).parent().index())
        var navIndex = $(this).parent().index();
        $("#nav>li").eq(navIndex).addClass("active").siblings().removeClass("active");
    
        //html,body의 scrollTop의 위치는 어디로 갈까???
        //menu1 누르면 section1
        //menu2 누르면 section2
        //menu3 누르면 section3
        var yPos = $("#container>section").eq(navIndex).offset().top;
        $("html,body").stop().animate({
            scrollTop:yPos
        },1000)
    })


})