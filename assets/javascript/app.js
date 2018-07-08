
$(document).ready(function () {

    var time = 120;
    var countTime = document.getElementById("timer");


    //when start button is clicked
    document.getElementById("start").onclick = function () {
        countDown();
        setTimeout(countDown, 1000 * 120);;
        generateQuiz();

    }

    
    //Starts the clock and adds the time to the page
    function countDown() {
        if (time > 0){
            countTime.innerHTML = ("<h3>Time Remaining: " + time + "</h3");
            time--;

        } else if (time === 0) {
                countTime.innerHTML = ("<h2>Time's Up!</h2>");
        }
        return
    }

    // Function to generate the quiz form
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

    var myQuestions = [
        {
            question: "1. The MkI Golf GTI made its public debut at the Frankfurt show in 1975, but which designer was responsible for the Golf’s distinctive sharp-edged look?",
            answers: {
                a: 'Giugiaro',
                b: 'Pininfarina',
                c: 'Versace'
            },
            correctAnswer: 'a'
        },
        {
            question: "2. The MkII Golf GTI arrived in 1984 and for many remains the best of all the generations. It also appeared in some of the most memorable TV ads at the time; which former model starred in the 'Changes' Golf GTI ad in 1987?",
            answers: {
                a: 'Paula Hamilton',
                b: 'Joanna Lumley',
                c: 'Cindy Crawford'
            },
            correctAnswer: 'a'
        },
        {
            question: "3. In 1992 the MkIII Golf arrived in the UK with the GTI version appearing the following year, using a 2.0-litre 16 valve engine. However, a faster Golf variant was already on sale – what was this called?",
            answers: {
                a: 'Golf R',
                b: 'Golf VR6',
                c: 'Rabbit II'
            },
            correctAnswer: 'b'
        },
        {
            question: "4. The MkIV Golf GTI appeared in 1997 and was the first iteration to use a turbocharged engine to give the desired performance. This engine was shared with which Audi model?",
            answers: {
                a: 'A3 1.8T',
                b: 'TT 3.2',
                c: 'A4 2.0T'
            },
            correctAnswer: 'a'
        },
        {
            question: "5. In 2003 the fifth-generation Golf GTI debuted once again at the Frankfurt Motor Show, this time with a 2.0-litre turbocharged engine and also the first installation of the innovative dual-clutch gearbox. What was this gearbox better known as?",
            answers: {
                a: 'S-tronic',
                b: 'DSG',
                c: 'Paddle Shift'
            },
            correctAnswer: 'b'
        },
        {
            question: "6. The MkVI Golf GTI reached the UK in 2009, eventually being superceeded by the MkVII GTI in 2013. But which one of these versions was the first one to be capable of 150mph?",
            answers: {
                a: 'Mk VI',
                b: 'Mk VII',
                c: 'Mk V'
            },
            correctAnswer: 'b'
        }
    ];
    
    // for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');

	}

	function showResults(questions, quizContainer, resultsContainer){
    
        // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('#quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');

// when user clicks start, the quiz is displayed
submitButton.onclick = function(){
    generateQuiz();
}


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


// var time = 60;
// var running = 0;

// function startPause(){
//  if (running == 0){
//     running = 1; 
//     decrement();
//     document.getElementById("start").innerHTML = "Pause";

//  }else{
//      running = 0;
//      document.getElementById("start").innerHTML = "Resume";
//  }
// }
   
// function reset(){
// running = 0;
// time = 60;
// document.getElementById("start").innerHTML = "Start";
// }

// function decrement(){
// setTimeour(function(){
//     time--;
//     var secs = Math.floor(time/1000);
//     document.getElementById("timer").innerHTML = secs

// })
// }

});