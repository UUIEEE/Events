dc = document;
bdy = () => {
    /*gb();bg()*/
};
var id = [0, 0];
gto = (a) => {
    a ? window.open(a, "_blank") : gb();
};
gb = (b, a = "pmt") => {
    event.stopPropagation();
    des(0);
    let r = dc.getElementById(a).style.display;
    gebi(a).style.display = b ? "none" : r == "none" ? "block" : "none";
};

des = (n) => {
    event.stopPropagation();
    let a = [
        "  ",
        [
            "Chhal Prapanch",
            "Participants would be required to find the answer based on the clues/hints/puzzles shown through an online meeting in the given time limit.",
        ],
        [
            "Chitragaatha",
            "Participants would be required to write a short story  based on/inspired by the picture(s) provided at the time of the competition within the given time limit",
        ],
    ];
    gebi("desTtl").innerHTML = a[n][0];
    gebi("desC").innerHTML = a[n][1];
    gebi("desD").style.display = n ? "block" : "none";
    gebi("desB").style.display = n ? "block" : "none";
};
gebi = (a) => {
    return dc.getElementById(a);
};
tmf = (i, t, dt = 3600000) => {
    return setInterval(() => {
        var now = new Date().getTime();
        var d = t - now;
        var days = Math.floor(d / (1000 * 60 * 60 * 24));
        var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((d % (1000 * 60)) / 1000);
        gebi(i).innerHTML =
            "(" +
            (days > 0 ? days + "d " : "") +
            hours +
            "h " +
            minutes +
            "m" +
            (days < 1 ? " " + seconds + "s)" : ")");
        if (d < 0) {
            gebi(i).innerHTML = "(" + (-d < dt ? "Started" : "Ended") + ")";
            clearInterval(id[i[2]]);
            gebi("l" + i[2]).title = "Click to join Webinar";
        }
    }, 1000);
};
bg = () => {
    (id[0] = tmf(
        "dT0",
        new Date("Jan 30, 2021 10:29:00").getTime(),
        20 * 60000
    )),
        (id[1] = tmf(
            "dT1",
            new Date("Jan 30, 2021 16:29:00").getTime(),
            20 * 60000
        ));
};
