let [seconds, minutes, hour] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let stoppedTimesElement = document.getElementById("stoppedTimes");
let timer = null;
let isPaused = false;
let stoppedTimes = [];

function stopwatch() {
    if (!isPaused) {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hour++;
            }
        }
        let h = hour < 10 ? "0" + hour : hour;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        displayTime.innerHTML = h + ":" + m + ":" + s;
    }
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
    isPaused = false;
    stoppedTimesElement.innerHTML = ""; // Clear the paused times display
}

function watchStop() {
    clearInterval(timer);
    isPaused = true;
    let pausedTime = displayTime.innerHTML;
    stoppedTimes.push(pausedTime);
    displaystoppedTimes();
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hour] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    isPaused = false;
    stoppedTimes = [];
    stoppedTimesElement.innerHTML = ""; // Clear the paused times display
}

function displaystoppedTimes() {
    stoppedTimesElement.innerHTML = "Stopped Times ";
    for (let i = 0; i < stoppedTimes.length; i++) {
        stoppedTimesElement.innerHTML += stoppedTimes[i] + "<br> ";
    }
}


