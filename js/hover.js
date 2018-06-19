$().ready(function(){
	$(".gallery img").mouseenter(function(){
         $(this).css("opacity", "0.6")
    })
    $(".gallery img").mouseleave(function(){
        $(this).css("opacity", "1")
    });
});