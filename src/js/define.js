$(function() {
    /* switches */
    sensors = ['ag', 'lp', 'g'] /*['ag', 'lp', 'g']*/
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
    timeFrame = 750;
    steps = 5;
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


function loader ()
{
    isReady = true;
    isReady &= sensors.length > 0;
    isReady &= !isAg || ag != null;
    isReady &= !isLp || lp != null;
    isReady &= !isG || g != null;

    if (isReady)
    {
    $("#canvas").css('background-color', 'white');
    statusBar ();
    }

}