//Ckech off Specific TODOLIST by Clicking
$("li").click(function () {
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