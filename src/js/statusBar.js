function statusBar () 
{
	$('#canvas').drawRect({
	  fillStyle: extractLightSensor(lp),
	  x: 0, y: 0,
	  width: 100,
	  height: 100
	}).drawText({
	  fillStyle: '#000',
	  strokeStyle: '#000',
	  strokeWidth: 0,
	  x: 80, y: 25,
	  fontSize: 16,
	  fontFamily: 'Verdana, sans-serif',
	  text: sensors.join(',')
	});
}