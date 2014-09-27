$(function() {
    if (sensors.length > 0) {
        $("#loader").css("position", "absolute");
        $("#loader").css("right", ($(window).innerWidth()) / 2) + 2;
        $("#loader").css("top", ($(window).innerHeight()) / 2) - 2;
        colourfill = "rgba(0, 0, 0, [[opacity]])";
        colourfill = colourfill.replace("[[opacity]]", "0.7");
        $("#canvas").css('background-color', colourfill);
        $("#canvas").css('border-color', colourfill);
    } else {
        $("#loader").css("display", "none");
        $("#canvas").css('border-color', 'blue');
    }
    $("#canvas").attr('width', $(window).innerWidth() - 2);
    $("#canvas").attr('height', $(window).innerHeight() - 100);
});
$(window).resize(function() {
    $("#canvas").attr('width', $(window).innerWidth() - 2);
    $("#canvas").attr('height', $(window).innerHeight() - 100);
    draw();
});