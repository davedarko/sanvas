function sensor_start() {
    pt = {
        id: 1,
        //x: $("#canvas").attr('width') / 2,
        //y: $("#canvas").attr('height') / 2,
        x: 10,
        y: $("#canvas").attr('height') -100,
        z: velocity.z
    };
}

function start(e) {
    console.log('start', e.clientX, e.clientY);
    pt = {
        id: 1,
        x: e.clientX,
        y: e.clientY
    }
}

function sensor_move() {
    if (obj.ptCnt == 0) {
        return;
    } else if (obj.ptCnt == 1) {
        lastPt = obj['p' + (obj.ptCnt)];
        sX = lastPt.x1 + velocity.x;
        sY = lastPt.y1 + velocity.y;
        pt = {
            id: 2,
            x: sX,
            y: sY,
            z: velocity.z
        };
    } else if (obj.ptCnt > 1) {
        lastPt = obj['p' + (obj.ptCnt)];
        // if (isConsoleMoves) {
        //     console.log(obj.ptCnt, obj, lastPt);
        //     isConsoleMoves = false;
        // }
        sX = lastPt.x2 + velocity.x;
        sY = lastPt.y2 + velocity.y;
        pt = {
            id: 2,
            x: sX,
            y: sY,
            z: velocity.z
        };
    }
}

function move(e) {
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

function sensor_end() {}

function end(e) {
    console.log('end', e.clientX, e.clientY);
}

function setPoint(pt) {
    z = velocity.z;
    obj.strokeStyle = extractLightSensor(lp);
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
        obj['p' + obj.ptCnt] = line;
        // } else {
        //     obj.ptCnt++;
        //     var line1 = Object();
        //     line1.type = 'line';
        //     line1.x1 = 100;
        //     line1.y1 = 100;
        //     obj.p1 = line1;
        //     obj.ptCnt++;
        //     var line2 = Object();
        //     line2.type = 'quadratic';
        //     line2.x2 = 300;
        //     line2.y2 = 100;
        //     // line2.cx1 = 200;
        //     // line2.cy1 = 250;
        //     console.log(obj.ptCnt);
        //     lastPt = obj['p' + (obj.ptCnt - 1)];
        //     line2.cx1 = line2.x2 - (line2.x2 - lastPt.x1) / 2;;
        //     line2.cy1 = line2.y2 + z;
        //     obj.p2 = line2;
        //     obj.ptCnt++;
        //     var line3 = Object();
        //     line3.type = 'quadratic';
        //     line3.x2 = 500;
        //     line3.y2 = 100;
        //     // line3.cx1 = 400;
        //     // line3.cy1 = -50;
        //     lastPt = obj['p' + (obj.ptCnt - 1)];
        //     line3.cx1 = line3.x2 - (line3.x2 - lastPt.x2) / 2;
        //     line3.cy1 = line3.y2 - z;
        //     console.log(line3.cx1, line3.cy1);
        //     obj.p3 = line3;
        // }
    }
}