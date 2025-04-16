let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById('display').textContent = formatTime(elapsedTime);
    }, 10);
    running = true;
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  running = false;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  running = false;
  document.getElementById('display').textContent = "00:00:00";
  document.getElementById('laps').innerHTML = "";
}

function recordLap() {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}
