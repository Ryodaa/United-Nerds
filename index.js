var blink_speed = 800; // every 1000 == 1 second, adjust to suit
setInterval(function () {
    var ele = document.getElementById('blinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

var test = 100;
setInterval(function () {
    var element = document.getElementById("title");
    element.style.transform = (element.style.transform == 'rotate(5deg)' ? '' : 'rotate(5deg)');
}, test);