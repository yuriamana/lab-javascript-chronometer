class Chronometer {
  constructor() {
    // should initialize two properties : currentTime and intervalId
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    //start keeping track of time, running a function in a 1 second interval
     this.intervalId = setInterval(()=> {
      this.currentTime += 1;
      if (typeof callback === 'function') callback();
     },1000)
  }

  getMinutes() {
    // should return number of minutes
    const minute = Math.floor(this.currentTime / 60);
    return minute;
  }

  getSeconds() {
    //should return the number of seconds
    const second = this.currentTime % 60;
    return second;
  }

  computeTwoDigitNumber(value) {
    // should take a number and return a string
    let result = value < 10 ? '0' + value : value;
    return String(result);
  }

  stop() {
    //clear the interval
    clearInterval(this.intervalId);
  }

  reset() {
    // reset our chronometer
    this.currentTime = 0;
  }

  split() {
    //return a string
   let m = this.computeTwoDigitNumber(this.getMinutes());
   let s = this.computeTwoDigitNumber(this.getSeconds());
    return `${m}:${s}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
