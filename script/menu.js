$(() => {
    //tab 
    $("#t-name li:nth-child(1)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "white");
    }));
    $("#t-name li:nth-child(2)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "white");
    }));
    $("#t-name li:nth-child(3)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "white");
    }));
    $("#t-name li:nth-child(4)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "var(--primary-color)");
        $("#t-name li:nth-child(5)").css("background", "white");
    }));
    $("#t-name li:nth-child(5)").on("click", (() => {
        $("#t-name li:nth-child(1)").css("background", "white");
        $("#t-name li:nth-child(2)").css("background", "white");
        $("#t-name li:nth-child(3)").css("background", "white");
        $("#t-name li:nth-child(4)").css("background", "white");
        $("#t-name li:nth-child(5)").css("background", "var(--primary-color)");
    }));
})
