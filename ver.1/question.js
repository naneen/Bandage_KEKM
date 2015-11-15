$( document ).ready(function() {
	var question = 1;
	var scores = Array.apply(null, Array(15)).map(Number.prototype.valueOf,0);

	var questions = [
	    'Have you felt sad or tearful for a majority of the day for at least the last two weeks?', 
	    'Have you lost interest in activities which you used to enjoy?', 
	    'Is it difficult for you to fall asleep most nights to the point that you do not get adequate sleep and are tired the next day?', 
	    'Do you feel you sleep a lot more than you should because of feeling fatigued most of the day for at least the last two weeks?', 
	    'Have you noticed a change in your appetite that has resulted in either not feeling hungry most days or feeling the urge to eat more than usual and has resulted in a change in your weight?', 
	    'Has your energy level decreased to the point that normal daily activities seem overwhelming?', 
	    'Have you noticed that it seems more difficult to stay focused on activities or to concentrate on complicated tasks?', 
	    'Have you thought about suicide or what it would be like if you were not around anymore?', 
	    'Do you find yourself getting angry easily or lashing out at people without a valid reason?',    
	    'Do friends or family tell you that they are concerned about you because of your feelings of sadness, your sleep patterns, or your anger?', 
	    'Is it more difficult for you to make decisions, even regarding simple matters which used to be easy?', 
	    'Do you cry more easily than you used to?', 
	    'Do you often criticize yourself about things you have done in the past or about decisions you have made?',      
	    'Have feelings of sadness or anger, changes in your sleep pattern, or a lack of motivation and energy gotten in the way of achieving goals or performing work activities?', 
	    'Does the future look bleak or even hopeless to you?' 
    ];
	// $('#summary-page').hide();

	$('#question').html(questions[question]);
	$('#back-button').hide();

	$('#score3').on('click', function () {
		scores[question-2] = 3;
		showTotalScore();
		// scoresToString();
	});
	$('#score2').on('click', function () {
		scores[question-2] = 2;
		showTotalScore();
		// scoresToString();
	});
	$('#score1').on('click', function () {
		scores[question-2] = 1;
		showTotalScore();
		// scoresToString();
	});
	$('#score0').on('click', function () {
		scores[question-2] = 0;
		showTotalScore();
		// scoresToString();
	});

	//degug method
	// var scoresToString = function(){
	// 	console.log(scores.toString());
 //        console.log("===================");
	// }

	var getTotalScore = function(){
		var score = 0;
		for (var i = 0; i < scores.length; ++i) {
           	score+=scores[i];
        }
        return score;
	}

	var showTotalScore = function(){
		$('#score').html('score: '+(getTotalScore()));
	}

	var getQ = function(){

		$('#question-head').html("Question" + (++question));
		$('#question').html(questions[question]);
		if (question == questions.length) {
			if (score > questions.length - 5) {
				$('#summary-result').html("It's highly recommended that you consider seeing psychologist for an eveluation.");
			} else if (score > question.length - 10) {
				$('#summary-result').html("It's recommended that you consider seeing psychologist for an eveluation.");
			} else {
				$('#summary-result').html("You are fine. Keep going.");
			}
			
			$('#question-page').fadeToggle();
			$('#summary-page').fadeToggle();
		}
	};

	$('.answer-button').on('click', function() {
		if(question < questions.length){
			getQ();
		}
	});

	$('button').on('click', function() {
		if (question == 0) {
			$('#back-button').hide();
		}
		else{
			$('#back-button').show();
		}
	});

	$('#back-button').on('click', function() {
		if(question > 1){
			scores[question-1] = 0;
			scores[question-2] = 0;
			$('#question-head').html("Question" + (--question));
			$('#question').html(questions[question]);
			showTotalScore();
		}
		if (question == 1) {
			$('#back-button').hide();
		}
	});













});	