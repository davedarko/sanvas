$(function() {
    /* switches */
    sensors = ['lp','g'] /*['ag', 'lp', 'g']*/
    isSensors = contains(sensors, 'ag') && contains(sensors, 'lp') && contains(sensors, 'g');
    isAg = contains(sensors, 'ag');
    isLp = contains(sensors, 'lp');
    isG = contains(sensors, 'g');
    console.log(isSensors);
    isDebug = false;
    /* constants */
    isDrawing = false;
    isConsoleMoves = false;
    isPushedButton = false;
    speed = 750;
    ag = null;
    lp = null;
    g = null;
    obj = null;
});
/* additional functions */
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}