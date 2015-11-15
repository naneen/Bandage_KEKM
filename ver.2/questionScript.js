var currentQ = 1;
var answers = ['','','','','','','','',''];
var questions = [
	'For at least 2 weeks, do you have these following symptoms (can have more than one answer)?',
	'During the last 2 week, have you had these following symptoms (can have more than one)?',
	'Do you have difficulties carrying out usual work, school, domestic, or social activities?',
	'Have you had recent bereavement or other major loss?',
	'Do you have bipolar depression (authorized by doctor)?',
	'Do you have any of these psychotic symptoms?'
		+'<br>- Delusion<br>- Hallucination<br>- Stupor',
	'Do you have any of these conditions?'
		+'<br>- risk of suicide/self-harm'
		+'<br>- alcohol use disorder or other substance use disorder'
		+'<br>- concurrent medical illness, signs / symptoms suggesting hypothyroidism, anemia, tumors, stroke, hypertension, diabetes, HIV / AIDS, obesity',
	'Are you a female of childbearing age who pregnant or breastfeeding?',
	'Are you a child or an younger than 12 years adolescent?'
];

//var items = [[1,2],[3,4],[5,6]];
//alert(items[0][0]);
var choices = [
	['Depressed mood<br>(most of the day, almost every day), (for children and adolescents: either irritability or depressed mood)'
	 	,'Loss of interest or pleasure in activities that are normally pleasurable'
		,'Decreased energy or easily fatigued'],
	['Reduced concentration and attention'
	 	,'Reduced self-esteem and self-con dence'
	 	,'Ideas of guilt and unworthiness'
	 	,'Bleak and pessimistic view of the future'
	 	,'Ideas or acts of self-harm or suicide'
	 	,'Disturbed sleep'
	 	,'Diminished appetite'],
	['Yes','No'],
	['Yes, in last 7 days. (recent bereavement)'
	 	,'Yes, in prior 2 months.'
	 	,'No'],
	['Yes', 'No'],
	['Yes', 'No'],
	['Yes', 'No'],
	['Yes', 'No'],
	['Yes', 'No']
];

function updateCurrentQ(command){
	if(currentQ<questions.length){
		if(command=='plus'){ currentQ++; }
		else if(command=='minus'){ currentQ--; }
		$('#question-head').html('Q'+currentQ);
		$('#question-text').html(questions[currentQ-1]);
		updateCurrentChoices();
	}
};

function updateCurrentChoices(){
	if(currentQ==1 || currentQ==2){
		$('#type-checkbox').show();
		$('#type-yesno').hide();
		createCheckbox();
	}
	else{
		$('#type-checkbox').hide();
		$('#type-yesno').show();
		
	}
};

function createCheckbox() {
	var container = $('#checkbox-ans');
	container.empty();
	for (var i=0; i<choices[currentQ-1].length; i++) {
			container.append('<input type="checkbox" autocomplete="off"> '+choices[currentQ-1][i]+'<br>');
	}
};

function countCheckbox(){
	var checked = $('input:checkbox:checked').length;
	$('#counted').html(checked);
	addAnstoArray(checked);
};

function addAnstoArray(ans) {
	answers[currentQ-1] = ans;
	$('#text').html(answers[currentQ-1]);
};

$( document ).ready(function() {
	updateCurrentQ('initial');
	updateCurrentChoices();
});

$("#submitB").click(function(){
	countCheckbox();
        droolsPostRequest();
	updateCurrentQ('plus');
});

 
