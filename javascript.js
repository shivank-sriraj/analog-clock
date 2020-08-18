function fetchTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    sec = (sec * 6) + 180;
    min = (min * 6) + 180;
    hour = (hour * 30) + 180;
    document.querySelector(".second-hand").style.transform = "rotate("+sec+"deg)";
    document.querySelector(".minute-hand").style.transform = "rotate("+min+"deg)";
    document.querySelector(".hour-hand").style.transform = "rotate("+hour+"deg)";
}
setInterval(fetchTime, 1000);
