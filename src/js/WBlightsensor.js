var draw_color ='#000000';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function extractLightSensor(data) {

	var red = data.clr.r;
	var green = data.clr.g;
	var blue = data.clr.b;
	var white = data.light;

	//console.log(red, green, blue);
	red = map_color (red*.9, white, 255);
	green = map_color (green*1.1, white, 255);
	blue = map_color (blue*1.1, white, 255);
	//console.log(red, green, blue);
	var hexcode = rgbToHex(red, green, blue);
	$('body').css('background-color', hexcode);
	return hexcode;

}

function map_color (value, max_in, max_out) {
	//console.log(value, max_in, max_out);

	return parseInt((value * max_out / max_in), 10);
}