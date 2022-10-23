$(function(){
    //p의 부모를 선택하여 배경색
    $("p").parent().css("background","pink");
    //p의 부모와 조상중에 모든 div선택
    $("p").parents("div").css("border","5px solid red");
    //#nav의 자식 li
    $("#nav").children("li").css("border","2px dotted pink");
    //#nav의 자식과 후손으로 오는 li 모두
    // $("#nav").find("li").css("border","2px dotted pink");
    //가장 가까이 있는 자식이 아닌 요소 찾기 (부모나 형제요소)
    $(".sub2").closest("ul").css("border","1px solid green");
})