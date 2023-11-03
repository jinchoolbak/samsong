$(() => {
    //tab-name
    $("#t-name li:nth-child(1)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "white");

        // // tab-body
        $(".t-body .t-body1").css("display", "block");
        $(".t-body .t-body2").css("display", "none");
        $(".t-body .t-body3").css("display", "none");
        $(".t-body .t-body4").css("display", "none");
        $(".t-body .t-body5").css("display", "none");
    }));

    $("#t-name li:nth-child(2)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "white");

        // // tab-body
        $(".t-body .t-body1").css("display", "none");
        $(".t-body .t-body2").css("display", "block");
        $(".t-body .t-body3").css("display", "none");
        $(".t-body .t-body4").css("display", "none");
        $(".t-body .t-body5").css("display", "none");
    }));

    $("#t-name li:nth-child(3)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "white");

        // // tab-body
        $(".t-body .t-body1").css("display", "none");
        $(".t-body .t-body2").css("display", "none");
        $(".t-body .t-body3").css("display", "block");
        $(".t-body .t-body4").css("display", "none");
        $(".t-body .t-body5").css("display", "none");
    }));

    $("#t-name li:nth-child(4)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(5)").css("background", "white");

        // // tab-body
        $(".t-body .t-body1").css("display", "none");
        $(".t-body .t-body2").css("display", "none");
        $(".t-body .t-body3").css("display", "none");
        $(".t-body .t-body4").css("display", "block");
        $(".t-body .t-body5").css("display", "none");
    }));

    $("#t-name li:nth-child(5)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "var(--primary-color)");

        // // tab-body
        $(".t-body .t-body1").css("display", "none");
        $(".t-body .t-body2").css("display", "none");
        $(".t-body .t-body3").css("display", "none");
        $(".t-body .t-body4").css("display", "none");
        $(".t-body .t-body5").css("display", "block");
    }));
});