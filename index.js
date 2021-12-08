let blink_speed = 800; // every 1000 == 1 second, adjust to suit
setInterval(function () {
    let ele = document.getElementById('blinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);