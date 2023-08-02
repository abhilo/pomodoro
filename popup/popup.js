var defaultWork = 15;
var defaultBreak = 5;
var seconds = "00"
var count = 0
var minutes = document.getElementById('minutes')
var mainInterval;
var start = document.getElementById("btn1")
var stop = document.getElementById('btn3')
var startTimer;



window.onload = () => {
    document.getElementById('minutes').innerHTML = defaultWork;
    document.getElementById('seconds').innerHTML = seconds;

    document.getElementById('bminutes').innerHTML = defaultWork;
    document.getElementById('bseconds').innerHTML = seconds;


    
    document.getElementById("btn1").addEventListener("click", () => {


        if (startTimer === undefined){
            if (count == 0){
                start()
            } else {
                alert("Timer is already running.")
            }
            count += 1;
        }
        

    });

    document.getElementById("btn4").addEventListener("click", () => {
        getSelectValue()
    });





    
        // if (count == 0){
        //     gameRunning = true;
        //     start()
        // } else {
        //     return;
        // }
        // count += 1
    



let getTimeWork = () => {
    
    var selectedValueWork = document.getElementById("list1").value;
    var selectedValueBreak = document.getElementById("list2").value;


    return selectedValueWork


}

let getTimeBreak = () => {
    
    var selectedValueBreak = document.getElementById("list2").value;


    return selectedValueBreak


}

// retrieves the selected values. 

let getSelectValue = () => {
    
    var selectedValueWork = document.getElementById("list1").value;
    var selectedValueBreak = document.getElementById("list2").value;

    setTime(selectedValueWork, selectedValueBreak)
}


// sets the current time chosen.

let setTime = (selectedValueWork, selectedValueBreak) => {

    document.getElementById('minutes').innerHTML = selectedValueWork;
    document.getElementById('bminutes').innerHTML = selectedValueBreak;

}



function start() {

    curr = getTimeWork()
    minutes = 1 - 1;
    seconds = 5;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


    var minutes_interval = setInterval(minutesTimer, 60000)
    var seconds_interval = setInterval(secondsTimer, 1000)


    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;

    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;


        if (seconds <= 0){
            if (minutes <= 0){
                clearInterval(minutes_interval)
                clearInterval(seconds_interval)
                startBreak()
            }
            seconds = 60;

        } 
    }

}


function startBreak() {

    curr = getTimeBreak()
    minutes = curr - 1;
    seconds = 10;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


    var minutes_interval = setInterval(minutesTimer, 60000)
    var seconds_interval = setInterval(secondsTimer, 1000)


    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('bminutes').innerHTML = minutes;

    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('bseconds').innerHTML = seconds;


        if (seconds <= 0){
            if (minutes <= 0){
                clearInterval(minutes_interval)
                clearInterval(seconds_interval)
                start()
            }
            seconds = 60;

        } 
    }

}



// function start() {

//     seconds = 3;

//     let workMin = defaultWork - 1;
//     let breakMin = defaultBreak - 1;

//     breakCount = 0;


//     let timerFunction = () => {
//         document.getElementById('minutes').innerHTML = workMin;
//         document.getElementById('seconds').innerHTML = seconds;

//         document.getElementById('bminutes').innerHTML = breakMin;
//         document.getElementById('bseconds').innerHTML = seconds;

//         seconds = seconds - 1;

//         if (seconds == 0){
//             workMin = workMin - 1;
//             seconds = 59;
//             if(workMin === -1) {
//                 if(breakCount % 2 === 0){
//                     workMin = breakMin;
//                     breakCount++
//                 }else {
//                     workMin = workTime;
//                     breakCount++
//                 }
//             }
//         }
//     }

        
//     setInterval(timerFunction, 1000);

// }






}

console.log(gameRunning)

// var click = new Audio("click.mp3");
// var bell = new Audio("bell.mp3");
// document.getElementById("btn1").addEventListener('click', function(event){
//     running(2)
// });

// const button = document.querySelector('.btn')

// button.addEventListener('click', function(event){
//     running(2)
// });




