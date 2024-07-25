let mins = 0;
let seconds = 0;
let tens = 0;
let interval;

const appendMins = document.querySelector('.mins');
const appendSeconds = document.querySelector('.seconds');
const appendTens = document.querySelector('.tens');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnLap = document.querySelector('.btn-lap');
const btnReset = document.querySelector('.btn-reset');
const lapTimesContainer = document.querySelector('.lap-times-container');

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    mins = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMins.innerHTML = mins;
    lapTimesContainer.innerHTML = '';
});

btnLap.addEventListener('click', () => {
    const lapTime = document.createElement('div');
    lapTime.textContent = `${mins}:${seconds}:${tens}`;
    lapTimesContainer.appendChild(lapTime);
});

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if (mins > 9) {
        appendMins.innerHTML = mins;
    }
}
