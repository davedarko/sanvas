$(function() {
    $("#canvas").attr('width', $(window).width() - 2);
    $("#canvas").attr('height', $(window).height() - 2);

    // var tid = setInterval(mycode, 20);
    // function abortTimer() { // to be called when you want to stop the timer
    //   clearInterval(tid);
    // }
});

$(window).resize(function() {
    $("#canvas").attr('width', $(window).width() - 2);
    $("#canvas").attr('height', $(window).height() - 2);
    draw();
});