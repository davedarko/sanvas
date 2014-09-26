$(function() {
	
	// console.log($("canvas").css('width'), $("canvas").css('height'));
	$("#canvas").attr('width', $( window ).width()-2);
	$("#canvas").attr('height', $( window ).height()-2);
	
	// console.log($("canvas").css('width'), $("canvas").css('height'));
	$("#canvas").drawArc({
		draggable: true,
		fillStyle: "green",
		x: 100, 
		y: 100,
		radius: 50
	});

	$( window ).resize(function() {
		$("#canvas").attr('width', $( window ).width()-2);
		$("#canvas").attr('height', $( window ).height()-2);
	});
});