setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.getElementById("hour-hand").style.transform = "rotate(" + ((hour * 30) + (minute / 2)) + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + ((minute * 6) + (second / 10)) + "deg)";
    document.getElementById("second-hand").style.transform = "rotate(" + (second * 6) + "deg)";
}, 1000);