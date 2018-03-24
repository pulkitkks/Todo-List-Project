$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
});
$("input").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span>" + text + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});