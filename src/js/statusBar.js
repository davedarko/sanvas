function statusBar () 
{
	$('#canvas').drawRect({
	  fillStyle: '#ccc',
	  x: 0, y: 0,
	  width: 240,
	  height: 48
	}).drawRect({
	  fillStyle: extractLightSensor(lp),
	  x: 4, y: 4,
	  width: 40,
	  height: 40
	}).drawText({
	  fillStyle: '#000',
	  strokeStyle: '#000',
	  strokeWidth: 0,
	  x: 48, y: 16,
	  fontSize: 12,
	  fontFamily: 'Verdana, sans-serif',
	  text: extractLightSensor(lp) + ' isSensors' + isSensors?'true':'false'
	});
}