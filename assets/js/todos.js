//Ckech off Specific TODOLIST by Clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass('completed');
});
//Click on X to delete TODO
$("span").click(function(event) {
	/* Act on the event */
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	/* Act on the event */
	if(event .which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//Create a new li and add to ul
		$("ul").append("<li><span>X</span> " +todoText+ "</li>");
	}
});