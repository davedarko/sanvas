
$(function() {
    var tid = setInterval(run, speed);
    $("#canvas").mousedown(function(e) {
        $("#canvas").clearCanvas();
        //$('canvas').removeLayers();
        // $('canvas').drawLayers();
        obj = {
            ptCnt: 0,
            layer: false,
            strokeStyle: '#000',
            strokeWidth: 6,
            rounded: true
        };
        isDrawing = true;
        if (isSensor) {
            pt = {
                id: 1,
                x: $("#canvas").attr('width') / 2,
                y: $("#canvas").attr('height') / 2
            };
        } else {
            console.log('start', e.clientX, e.clientY);
            pt = {
                id: 1,
                x: e.clientX,
                y: e.clientY
            }
        }
        setPoint(pt);
    });
    $("#canvas").mousemove(function(e) {
        if (isDrawing) {
            if (isSensor) {
                if (obj.ptCnt == 0) {
                    return;
                } else if (obj.ptCnt == 1) {
                    lastPt = obj['p' + (obj.ptCnt)];
                    sX = lastPt.x1 + 5;
                    sY = lastPt.y1 + 5;
                    pt = {
                        id: 2,
                        x: sX,
                        y: sY
                    };
                } else if (obj.ptCnt > 1) {
                    lastPt = obj['p' + (obj.ptCnt)];
                    if (isConsoleMoves) {
                        console.log(obj.ptCnt, obj, lastPt);
                        isConsoleMoves = false;
                    }
                    sX = lastPt.x2 + 15;
                    sY = lastPt.y2 + 15;
                    pt = {
                        id: 2,
                        x: sX,
                        y: sY
                    };
                }
            } else {
                if (isConsoleMoves) {
                    console.log('move', e.clientX, e.clientY);
                    isConsoleMoves = false;
                }
                pt = {
                    id: 2,
                    x: e.clientX,
                    y: e.clientY
                }
            }
            setPoint(pt);

            draw();
        }
    });
    $("#canvas").mouseup(function(e) {
        isDrawing = false;
        if (isSensor) {} else {
            console.log('end', e.clientX, e.clientY);
        }
        draw();
    });
});

function setPoint(pt) {
    z = 50;
    obj.strokeStyle = extractLightSensor (lp);
    if (pt != undefined) {
        obj.ptCnt++;
        var line = Object();
        if (!isDebug || pt.id == 1) {
            line.type = 'line';
        } else {
            line.type = 'quadratic';
        }
        line['x' + pt.id] = pt.x;
        line['y' + pt.id] = pt.y;
        if (isDebug && pt.id == 2) {
            lastPt = obj['p' + (obj.ptCnt - 1)];
            line.cx1 = line.x2 - (line.x2 - lastPt['x' + pt.id]) / 2;;
            line.cy1 = line.y2 + z;
        }
        //line.strokeStyle = extractLightSensor(lp);
        obj['p' + obj.ptCnt] = line;
    } else {
        obj.ptCnt++;
        var line1 = Object();
        line1.type = 'line';
        line1.x1 = 100;
        line1.y1 = 100;
        obj.p1 = line1;
        obj.ptCnt++;
        var line2 = Object();
        line2.type = 'quadratic';
        line2.x2 = 300;
        line2.y2 = 100;
        // line2.cx1 = 200;
        // line2.cy1 = 250;
        console.log(obj.ptCnt);
        lastPt = obj['p' + (obj.ptCnt - 1)];
        line2.cx1 = line2.x2 - (line2.x2 - lastPt.x1) / 2;;
        line2.cy1 = line2.y2 + z;
        obj.p2 = line2;
        obj.ptCnt++;
        var line3 = Object();
        line3.type = 'quadratic';
        line3.x2 = 500;
        line3.y2 = 100;
        // line3.cx1 = 400;
        // line3.cy1 = -50;
        lastPt = obj['p' + (obj.ptCnt - 1)];
        line3.cx1 = line3.x2 - (line3.x2 - lastPt.x2) / 2;
        line3.cy1 = line3.y2 - z;
        console.log(line3.cx1, line3.cy1);
        obj.p3 = line3;
    }
}

function run() {
    isConsoleMoves = true;
    if (isSensor) {
        isReady = ag != null && lp != null && g != null;
        if (isReady) {
            $("#canvas").css('background-color', 'white');
            if (isPushedButton) {
                if (!isDrawing) {
                    $("#canvas").mousedown();
                }
                //console.log('ACCEL', 'x', ag.accel.x, 'y', ag.accel.y, 'z', ag.accel.z);
                //console.log('GYRO', 'x', ag.gyro.x, 'y', ag.gyro.y, 'z', ag.gyro.z);
                isX = Math.abs(ag.accel.x) > 0.3;
                isY = Math.abs(ag.accel.y) > 0.3;
                isMove = isX || isY;
                console.log('isMove', isMove);
                if (isMove) {
                    $("#canvas").mousemove();
                }
            }
        }
    }
}

function abort() { // to be called when you want to stop the timer
    //   clearInterval(tid);
}

function draw() {
    if (obj == null) {
        return;
    }
    $('#canvas').drawPath(obj);
}

/* button */
$(document).on('keydown', function(e) {
    switch (e.which) {
        case 32:
            isPushedButton = true;
            break;
            // key code for left arrow
        case 37:
            break;
            // key code for right arrow
        case 39:
            break;
    }
});
$(document).on('keyup', function(e) {
    switch (e.which) {
        case 32:
            isPushedButton = false;
            break;
    }
});