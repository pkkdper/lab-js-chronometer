class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    if(printTimeCallback) {printTimeCallback()}
  }, 1000)}

  getMinutes() {
    let minutes =  math.floor(this.currentTime/60);
    return minutes;
  };


  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milliseconds = this.computeTwoDigitNumber(this.currentMilliseconds); // <= BONUS 

    return `${minutes}:${seconds}:${milliseconds}`;  }
};
