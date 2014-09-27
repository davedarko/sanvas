$(function() {
    if (sensors.length > 0) {
        colourfill = "rgba(0, 0, 0, [[opacity]])";
        colourfill = colourfill.replace("[[opacity]]", "0.7");
        $("#canvas").css('background-color', colourfill);
        $("#canvas").css('border-color', colourfill);
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