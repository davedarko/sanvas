var frame_buffer() {

}

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

	/*
	var tid = setInterval(mycode, 20);

	function mycode() {
		
		$('#canvas').drawRect({
			fillStyle: 'rgba(27, 27, 27, 0.1)',
			x: 0, y: 0,
			width: $('#canvas').width()*2,
			height: $('#canvas').height()*2
		});
	}

	function abortTimer() { // to be called when you want to stop the timer
	  clearInterval(tid);
	}
	*/
});