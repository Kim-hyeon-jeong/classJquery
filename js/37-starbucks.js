$(function(){
    $("#nav>li>a").click(function(){
        $(this).next().slideToggle(300)
        .parent()
        .siblings()
        .children(".sub").slideUp(300);
        
        $(this).parent().toggleClass("active")
        .siblings().removeClass("active");
    })
})