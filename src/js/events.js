$(function() {
    
    var tid = setInterval(run, timeFrame);
    
    $("#canvas").mousedown(function(e) {
        obj = {
            ptCnt: 0,
            strokeStyle: '#000',
            strokeWidth: 6,
            rounded: true
        };
        isDrawing = true;
        if (isAg && ag != null) {
            sensor_start();
        } else {
            start(e);
        }
        setPoint(pt);
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
        isDrawing = false;
        if (isAg && ag != null) {
            sensor_end();
        } else {
            end(e);
        }
        draw();
    });
});

function run() {
    loader();
    handleButton();

    isConsoleMoves = true;
    if (isAg && ag != null) {
        console.log(isPushedButton,isDrawing);

        if (isPushedButton) {
            if (!isDrawing) {
                $("#canvas").mousedown();
            }
            //console.log('ACCEL', 'x', ag.accel.x, 'y', ag.accel.y, 'z', ag.accel.z);
            //console.log('GYRO', 'x', ag.gyro.x, 'y', ag.gyro.y, 'z', ag.gyro.z);
            velocity.x += ag.accel.x * warp;
            velocity.y += ag.accel.y * warp;

            isX = 1; //Math.abs(ag.accel.x) > 0.3;
            isY = 1; //Math.abs(ag.accel.y) > 0.3;
            isMove = isX || isY;
            console.log('isMove', isMove);
            if (isMove) {
                $("#canvas").mousemove();
            }
        } else {
            $("#canvas").clearCanvas();
            //$('canvas').removeLayers();
            // $('canvas').drawLayers();        
        }
    } else {
        if (!isPushedButton) {
            $("#canvas").clearCanvas();
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