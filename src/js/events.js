$(function() {
    var tid = setInterval(run, timeFrame);
    $("#canvas").mousedown(function(e) {
        if (isPushedButton) {
            obj = {
                ptCnt: 0,
                strokeStyle: '#000',
                strokeWidth: 6,
                rounded: true
            };
            if (isAg && ag != null) {
                sensor_start();
            } else {
                start(e);
            }
            isDrawing = true;
            setPoint(pt);
        }
    });
    $("#canvas").mousemove(function(e) {
        if (isPushedButton && isDrawing) {
            if (isAg && ag != null) {
                sensor_move();
            } else {
                move(e);
            }
            setPoint(pt);
            draw();
        }
    });
    $("#canvas").mouseup(function(e) {
        if (isPushedButton) {
            isDrawing = false;
            if (isAg && ag != null) {
                sensor_end();
            } else {
                end(e);
            }
            draw();
        }
    });
});

function run() {
    loader();
    handleButton();
    isConsoleMoves = true;
    if (isAg && ag != null) {
        if (isPushedButton) {
            if (!isDrawing) {
                $("#canvas").mousedown();
            }
            //console.log('ACCEL', 'x', ag.accel.x, 'y', ag.accel.y, 'z', ag.accel.z);
            //console.log('GYRO', 'x', ag.gyro.x, 'y', ag.gyro.y, 'z', ag.gyro.z);
            isX = Math.abs(ag.accel.x) > 0.05;
            isY = Math.abs(ag.accel.y) > 0.05;
            isMove = isX || isY;
            if (isMove) {
                velocity.x += ag.accel.x + warp;
                velocity.y += ag.accel.y + warp;
                velocity.z += ag.accel.z + warp;
                $("#canvas").mousemove();
            }
        } else {
            $("#canvas").clearCanvas();
            velocity = {
                x: 0,
                y: 0,
                z: 0
            };
            //$('canvas').removeLayers();
            // $('canvas').drawLayers();        
        }
    } else {
        if (!isPushedButton) {
            $("#canvas").clearCanvas();
            velocity = {
                x: 0,
                y: 0,
                z: 0
            };
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