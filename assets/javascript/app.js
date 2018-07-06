// Setting timer to 60

// var counter = 0;

// function setup() {
//     var timer = select('#timer');
//     timer.html(counter);

//     function timeIt() {
//         counter++;
//         timer.html(counter);
//     }
//     setInterval(timeIt, 1000);

// };


// var timer = 60;
// var counter = 0;

// function timeIt(){

// }

// $("#timmer").html('60');
//  setInterval(timeIt, 1000);


var time = 60;
var running = 0;

function startPause(){
 if (running == 0){
    running = 1; 
    decrement();
    document.getElementById("start").innerHTML = "Pause";

 }else{
     running = 0;
     document.getElementById("start").innerHTML = "Resume";
 }
}
   
function reset(){
running = 0;
time = 60;
document.getElementById("start").innerHTML = "Start";
}

function decrement(){
setTimeour(function(){
    time--;
    var secs = Math.floor(time/1000);
    document.getElementById("timer").innerHTML = secs

})
}