function fetchTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    sec = sec * 6;
    min = min * 6;
    hour = hour * 30;
    document.querySelector(".second-hand").style.transform = "rotate(" + (sec + 180) + "deg)";
    document.querySelector(".minute-hand").style.transform = "rotate(" + ((min + sec/60) + 180) + "deg)";
    document.querySelector(".hour-hand").style.transform = "rotate(" + ((hour + min/12) + 180) + "deg)";
}
setInterval(fetchTime, 1000);

/*
360deg second -> 6deg min  =  60deg second -> 1deg min.
360deg min -> 30deg hour  =  12deg min -> 1deg hour.
*/
