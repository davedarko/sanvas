function handleButton() {
    if (isG && g != null) {
        isPushedButton = (g.up_ch_payload[0]) ? true : false;
        if (!isPushedButton)
        {
            isDrawing = false;
        }
    } else {

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
                    isDrawing = false;
                    break;
            }
        });
    }
}