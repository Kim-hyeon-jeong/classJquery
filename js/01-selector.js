$(function(){
    //모든 요소를 선택하여 글자색을 초록으로 바꾸기
    $("*").css("color","green");

    //태그 선택자 h1을 선택하여 밑줄
    $("h1").css("text-decoration","underline");

    //태그 선택자 h2를 선택하여 테두리
    $("h2").css("border","1px solid black");

    //.text클래스를 선택하여 글자크기를 30px
    $(".text").css("font-size","30px");

    //#idText 선택하여 배경색 #ccc
    $("#idText").css("background","#ccc");

    //다중선택자 .text .textClass 두개를 선택하여 기울기
    $(".text,.textClass").css("font-style","italic");
})