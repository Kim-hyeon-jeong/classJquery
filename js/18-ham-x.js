$(function(){
    var count= 0;
    //hamBtn1
    $(".hamBtn1").click(function(){
        count++;
        if(count % 2 ==0){ //짝수번째 클릭
            $(this).find("img").attr("src","images/ham1.png");
        }
        else{
            $(this).find("img").attr("src","images/close1.png");
        }
    })

    //hamBtns2
    $(".hamBtn2").click(function(){
        $(this).children().toggleClass("active")
    })

    //ham
    $(".ham").click(function(){
        $(this).children().toggleClass("active");
    })
})