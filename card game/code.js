let totalSeconds = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", ready);
 
function ready() {
    console.log('The web page is ready');
    init();
}

function newGame() {
    reset();
}

function init(){

}

function reset() {
    totalSeconds = 0;

    if (intervalId){
        clearInterval(intervalId)
    }
    intervalId = setInterval(setTime, 1000);
}


function setTime() {
  //let daysLabel = document.getElementById("days");
  //let hoursLabel = document.getElementById("hours");
    let minutesLabel = document.getElementById("minutes");
    let secondsLabel = document.getElementById("seconds");

    totalSeconds = totalSeconds + 1;
    const totalMinutes = parseInt(totalSeconds / 60);
  //const totalHours = parseInt(totalMinutes / 60);
 // const totalDays = parseInt(totalHours / 24);

    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(totalMinutes % 60);
  //hoursLabel.innerHTML = pad(totalHours % 24);
  //daysLabel.innerHTML = parseInt(totalDays % 365);

    //secondsLabel.innerHTML = pad(totalSeconds % 60);
    //minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60) % 60);
    //hoursLabel.innerHTML = pad(parseInt(totalSeconds / 60 / 60 % 24));
    //daysLabel.innerHTML = parseInt(totalSeconds / 60 / 60 / 24 % 365);
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}