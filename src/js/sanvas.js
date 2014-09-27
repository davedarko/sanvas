$(function() {
    if (isSensor) {
        colurfill = "rgba(0, 0, 0, [[opacity]])";
        colurfill = colurfill.replace("[[opacity]]", "0.7");
        $("#canvas").css('background-color', colurfill);
        $("#canvas").css('border-color', colurfill);
    } else {
        $("#canvas").css('border-color', 'blue');
    }
    $("#canvas").attr('width', $(window).width() - 2);
    $("#canvas").attr('height', $(window).height() - 2);
});
$(window).resize(function() {
    $("#canvas").attr('width', $(window).width() - 2);
    $("#canvas").attr('height', $(window).height() - 2);
    draw();
});