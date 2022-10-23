$(function(){
    //.list의 첫번째 자식인 li
    $(".list>li:first-child").css("background","pink");
    //.list 마지막 li skyblue
    $(".list>li:last-child").css("background","skyblue");

    //.jlist의 첫번째 자식 li
    $(".jlist>li:first").css("background","purple");
    //.jlist의 마지막 자식 li
    $(".jlist>li:last").css("background","yellow");

    //.list 3번째 자식
    $(".list>li:nth-child(3)").css("border","1px solid blue"); //1부터 시작
    //.jlist 3번째 자식
    // $(".jlist>li:eq(2)").css("border","1px solid red"); //0부터 시작
    $(".jlist>li").eq(2).css("border","1px solid red"); //위와 동일

    //.olList의 짝수번째 배경
    $(".olList>li:nth-child(2n)").css("background","aqua");
    //.olList의 홀수번째 배경
    $(".olList>li:nth-child(2n+1)").css("background","orange");

    //.jolList의 짝수번째 배경, 홀수번째 배경
    $(".jolList>li:even").css("background","lime"); //0부터시작
    $(".jolList>li:odd").css("background","beige"); //0부터시작

    //.jolList>li의 3번째보다 큰 요소는 글자 크기 30px
    $(".jolList>li:gt(3)").css("font-size","30px"); //0부터 시작. greater than

    //.jolList>li의 3번째보다 작은요소는 글자색
    $(".jolList>li:lt(3)").css("color","white"); //less than
    // $(".jolList>li").lt(3).css("font-size","5px");

})