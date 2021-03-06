$(function() {
    /* switches */
    sensors = ['ag','lp','g'] /*['ag', 'lp', 'g']*/
    isSensors = contains(sensors, 'ag') && contains(sensors, 'lp') && contains(sensors, 'g');
    isAg = contains(sensors, 'ag');
    isLp = contains(sensors, 'lp');
    isG = contains(sensors, 'g');
    isDebug = false;
    /* constants */
    isDrawing = false;
    isConsoleMoves = false;
    isPushedButton = false;
    timeFrame = 250;
    steps = 5;
    ag = null;
    lp = null;
    g = null;
    obj = null;
    velocity = {
        x: 0,
        y: 0,
        z: 0
    };
    warp = 0.0001;
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

function loader() {
    isReady = true;
    isReady &= sensors.length > 0;
    isReady &= !isAg || ag != null;
    isReady &= !isLp || lp != null;
    isReady &= !isG || g != null;
    if (isReady) {
        $("#loader").css("display", "none");
        $("#canvas").css('background-color', 'white');
        statusBar();
    }
}