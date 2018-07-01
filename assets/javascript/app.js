// Setting timer to 60

var counter = 0;

function setup() {
    var timer = select('#timer');
    timer.html(counter);

    function timeIt() {
        counter++;
        timer.html(counter);
    }
    setInterval(timeIt, 1000);

};


// var timer = 60;
// var counter = 0;

// function timeIt(){

// }

// $("#timmer").html('60');
//  setInterval(timeIt, 1000);
