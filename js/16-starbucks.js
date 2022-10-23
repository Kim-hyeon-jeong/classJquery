$(function(){
    //#nav>li 마우스가 올라가면 자식으로 있는 .sub가 나오도록(해당 자식.sub만 나오도록)
    $("#nav>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        // $(".sub").css("display","none");
        // $(this).next().css("display","block");
        $(".sub").slideUp(500);//0.5s
        $(this).next().slideDown(500);
    })
})