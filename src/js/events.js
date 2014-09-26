$(function() {
    drawing = false;
    obj = {
        layer: true,
        strokeStyle: '#000',
        strokeWidth: 6,
        rounded: true,
        click: function(layer) {
            // Click a star to spin it
            //console.log (layer);
            // $(this).animateLayer(layer, {
            //   rotate: '+=144'
            // });
        }
};

setPoint();
    draw();

    
    $("#canvas").mousedown(function(e) {
        drawing = true;
        pt = {
            x1: e.clientX,
            y1: e.clientY
        }
        setPoint(pt);
    });
    $("#canvas").mousemove(function(e) {
        if (drawing) {
            pt = {
                x2: e.clientX,
                y2: e.clientY
            }
            setPoint(pt);
            console.log('move', e.clientX, e.clientY);
        }
    });
    $("#canvas").mouseup(function(e) {
        drawing = false;
        console.log('end', e.clientX, e.clientY);
        draw();
    });
    // var tid = setInterval(mycode, 20);
    // function abortTimer() { // to be called when you want to stop the timer
    //   clearInterval(tid);
    // }
});

function setPoint() {
    var line1 = Object();
    line1.type = 'line';
    line1.x1 = 100;
    line1.y1 = 100;
    obj.p1 = line1;
    var line2 = Object();
    line2.type = 'quadratic';
    // line2.cx1 = 200;
    // line2.cy1 = 250;
    // line2.x2 = 300;
    // line2.y2 = 100;
    line2.cx1 = line2.x2 = 300;
    line2.cy1 = line2.y2 = 100;
    obj.p2 = line2;
    var line3 = Object();
    line3.type = 'quadratic';
    line3.cx1 = line3.x2 = 500;
    line3.cy2 = line3.y2 = 100;
    // line3.cx1 = 400;
    // line3.cy1 = -50;
    obj.p3 = line3;
}

function draw() {
    // Add the points from the array to the object
    // for (var p=0; p<pt1.length; p+=1) {
    //   obj['x'+(p+1)] = pts[p][0];
    //   obj['y'+(p+1)] = pts[p][1];
    // }
    // Draw the line
    //console.log (obj);
    $('canvas').drawPath(obj);
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