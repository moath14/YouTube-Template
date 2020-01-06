$(document).ready(function(){
    $("html, .border-play-list").niceScroll({
        cursorcolor: "#424242",
        cursorwidth: "10px",
        zindex: "5000",
        autohidemode: false,
        cursorborderradius: "none",
        smoothscroll: true
    }); 

    $(".fa-bars, a.el-float-left").click(function(){
        $(".menu-bars").animate({
            left: 0
        },1000)
    });

    $(".fa-times").click(function(){
        $(".menu-bars").animate({
            left: -280
        },1000)
    });
 
    
});
