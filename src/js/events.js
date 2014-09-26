$(function() {
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

        pt = {
            id: 1,
             x: e.clientX,
             y: e.clientY
            //x: $("#canvas").attr('width') / 2,
            //y: $("#canvas").attr('height') / 2
        }
        setPoint(pt);
    });
    $("#canvas").mousemove(function(e) {
        if (isDrawing) {
            pt = {
                id: 2,
                x: e.clientX,
                y: e.clientY
            }
            setPoint(pt);
            console.log('move', e.clientX, e.clientY);
            draw();
        }
    });
    $("#canvas").mouseup(function(e) {
        isDrawing = false;
        console.log('end', e.clientX, e.clientY);
        draw();
    });
    // var tid = setInterval(mycode, 20);
    // function abortTimer() { // to be called when you want to stop the timer
    //   clearInterval(tid);
    // }
});

function setPoint(pt) {
    z = 150;
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
            console.log(obj.ptCnt);
            lastPt = obj['p' + (obj.ptCnt - 1)];
            line.cx1 = line.x2 - (line.x2 - lastPt['x' + pt.id]) / 2;;
            line.cy1 = line.y2 + z;
        }
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

function draw() {
    // Add the points from the array to the object
    // for (var p=0; p<pt1.length; p+=1) {
    //   obj['x'+(p+1)] = pts[p][0];
    //   obj['y'+(p+1)] = pts[p][1];
    // }
    // Draw the line
    //console.log (obj);
    $('#canvas').drawPath(obj);
    // $('#canvas').drawPath({
    //   strokeStyle: '#000',
    //   strokeWidth: 4,
    //   p1: {
    //     type: 'line',
    //     x1: 200, y1: 50,
    //     x2: 100, y2: 150,
    //     x3: 200, y3: 150,
    //     x4: 120, y4: 200
    //   },
    //   p2: {
    //     type: 'quadratic',
    //     cx1: 175, cy1: 250,
    //     x2: 225, y2: 200
    //   }
    // });
}