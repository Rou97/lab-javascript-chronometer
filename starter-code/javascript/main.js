'use-strict'
let chronometer = new Chronometer();


var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


// Start/Stop Button
btnLeft.addEventListener('click', function () {
    let buttonL = document.getElementById('btnLeft');
   
    if (buttonL.className === 'btn start'){
        buttonL.innerText = "STOP";
        buttonL.setAttribute('class', 'btn stop');
        chronometer.startClick();
        printTime();
    } else {
        buttonL.innerText = "START";
        buttonL.setAttribute('class', 'btn start');
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let buttonR = document.getElementById('btnRight');
    
    if (buttonR.className === 'btn reset'){
        buttonR.innerText = "SPLIT";
        buttonR.setAttribute('class', 'btn split');
        chronometer.resetClick();
    } else {
        buttonR.innerText = "RESET";
        buttonR.setAttribute('class', 'btn reset');
    }
});

function printTime() {
    chronometer.intervalId = setInterval(() => {
    secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[1];
    }, 1000);

    chronometer.intervalId = setInterval(() => {
        secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[0];
        }, 1000);

    chronometer.intervalId = setInterval(() => {
        minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[1];
        }, 1000);

    chronometer.intervalId = setInterval(() => {
        minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[0];
        }, 1000);
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}