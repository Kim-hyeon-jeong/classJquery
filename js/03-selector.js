$(function(){
    //.list에서 .list3 바로 다음에 오는 형제 하나를 선택하여 글자를 pink
    $(".list3").next().css("color","pink");
    //.list에서 .list3 이후의 모든 형제를 테두리
    $(".list3").nextAll().css("border","1px solid skyblue");
    //.list3~.list6 전까지 배경
    $(".list3").nextUntil(".list6").css("background","#ccc");

    //.menu .menu5 이전하나
    $(".menu5").prev().css("color","hotpink");
    //.menu .menu5 이전모두
    $(".menu5").prevAll().css("background","green");
    //.menu .menu5 이전 .menu2이후
    $(".menu5").prevUntil(".menu2").css("border","1px solid black");

    //.si4의 모든 형제들(.si4제외)
    $(".si4").siblings().css("text-decoration","underline");
})