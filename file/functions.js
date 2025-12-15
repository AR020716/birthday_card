var $win = $(window);
var confettiLaunched = 0; // Flag to ensure confetti launches only once

/* OPTIONAL: remove auto reload on resize (recommended)
$(window).resize(function () {
    location.reload();
});
*/

function timeCountdown(targetDate) {
    var now = new Date();
    var seconds = Math.floor((targetDate - now) / 1000);


    if (seconds <= 0) {
        $("#clock").html("Happy 23rd Birthday! 🎉🎂");
        
        // Launch confetti only once
        if (confettiLaunched<=5) {
            confettiLaunched++;
            launchConfetti();
        }
        return;
    }

    var days = Math.floor(seconds / (3600 * 24));
    seconds %= (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    // formatting
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var result =
        "<span class='digit'>" + days + "</span>D : " +
        "<span class='digit'>" + hours + "</span>H : " +
        "<span class='digit'>" + minutes + "</span>M : " +
        "<span class='digit'>" + seconds + "</span>S";

    $("#clock").html(result);
    $("#message-box").html("TURNING 23 YEARS OLD IN");
}

$(function () {
    // var birthday = new Date(2025, 11, 20, 0, 0, 0); // Dec 20, 2025 12:00 AM
    var birthday = new Date(2025, 11, 15, 11, 0, 0);

    setInterval(function () {
        timeCountdown(birthday);
    }, 1000);
});
$.fn.typewriter = function () {
    this.each(function () {
        var $ele = $(this),
            str = $ele.html(),
            progress = 0;

        $ele.html('');
        var timer = setInterval(function () {
            var current = str.substr(progress, 1);
            if (current === '<') {
                progress = str.indexOf('>', progress) + 1;
            } else {
                progress++;
            }
            $ele.html(str.substring(0, progress));
            if (progress >= str.length) {
                clearInterval(timer);
            }
        }, 75);
    });
    return this;
};
