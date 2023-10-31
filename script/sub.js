$(() => {
    $(".t-title li:nth-child(2)").on("click", (() => {
        $(".t-title li:nth-child(2)").css({
            background: "red",
            color: "white"
        });
    }));
})