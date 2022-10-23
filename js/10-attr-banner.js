$(function(){
    // $(".btn>li:eq(0)").click(function(){
    //     var $src = $(".btn>li:eq(0)").find("img").attr("title");
    //     $(".bigImg>img").attr("src",$src)
    // })


    // //btn의 li 두번째를 클릭하면 후손으로 있는 img의 title 속성값을 받아서
    // //큰 이미지에 src 속성으로 준다. 
    // $(".btn>li:eq(1)").click(function(){
    //     var $src = $(".btn>li:eq(1)").find("img").attr("title");
    //     $(".bigImg>img").attr("src",$src);
    // })

    $(".btn>li").click(function(){
        var $src = $(this).find("img").attr("title"); //this : (클릭한)자기자신
        var $alt = $(this).find("img").attr("alt");
        // $(".bigImg>img").attr("src",$src);
        $(".bigImg>img").attr({
            "src":$src,
            "alt":$alt
        })
        $("h1").text($alt);
    })
})