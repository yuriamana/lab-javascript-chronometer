const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  //
  printMinutes();
  printSeconds();
  
}

function printMinutes() {
  // 
  const string = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = string[0];
  minUniElement.textContent = string[1];
}
function printSeconds() {
  // 
  const string = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = string[0]; // the decimals (1 of 19)
  secUniElement.textContent = string[1]; // the units (9 of 19)
}

// ==> BONUS
// function printMilliseconds() {
// ... your code goes here
//}

function printSplit() {
  // ... your code goes here
  
  
  
}

function clearSplits() {
  // ... your code goes here

}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.add('stop');
  btnLeftElement.classList.remove('start');
}

function setSplitBtn() {
  // ... your code goes here
  chronometer.split();
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');

}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime)
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset()
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === 'START') {
    //chronometer.start();
    setStopBtn();
    setSplitBtn();
  }else{
    //chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent === 'RESET') {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
