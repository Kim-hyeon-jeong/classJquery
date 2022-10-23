$(function(){
    //형제 선택자 h1+h2 : h1바로 다음에오는 h2
    $("h1+h2").css("background","pink");

    //이후선택자 h1~p : h1 다음에오는 p
    $("h1~p").css("font-size","50px");

    //자식선택자 메인메뉴
    $("#nav>li>a").css("color","skyblue");

    //후손선택자
    $("#nav>li a").css("text-decoration","none");
})