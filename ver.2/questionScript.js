var currentQ = 1;
var answers = ['', '', '', '', '', '', '', '', ''];
var questions = [
    'For at least 2 weeks, do you have these following symptoms (can have more than one answer)?',
    'During the last 2 week, have you had these following symptoms (can have more than one)?',
    'Do you have difficulties carrying out usual work, school, domestic, or social activities?',
    'Have you had recent bereavement or other major loss?',
    'Do you have bipolar depression (authorized by doctor)?',
    'Do you have any of these psychotic symptoms?'
            + '<br>- Delusion<br>- Hallucination<br>- Stupor',
    'Do you have any of these conditions?'
            + '<br>- risk of suicide/self-harm'
            + '<br>- alcohol use disorder or other substance use disorder'
            + '<br>- concurrent medical illness, signs / symptoms suggesting hypothyroidism, anemia, tumors, stroke, hypertension, diabetes, HIV / AIDS, obesity',
    'Are you a female of childbearing age who pregnant or breastfeeding?',
    'Are you a child or an younger than 12 years adolescent?'
];
var choices = [
    ['Depressed mood<br>(most of the day, almost every day), (for children and adolescents: either irritability or depressed mood)'
                , 'Loss of interest or pleasure in activities that are normally pleasurable'
                , 'Decreased energy or easily fatigued'],
    ['Reduced concentration and attention'
                , 'Reduced self-esteem and self-con dence'
                , 'Ideas of guilt and unworthiness'
                , 'Bleak and pessimistic view of the future'
                , 'Ideas or acts of self-harm or suicide'
                , 'Disturbed sleep'
                , 'Diminished appetite'],
    ['Yes', 'No'],
    ['Yes, in last 7 days. (recent bereavement)'
                , 'Yes, in prior 2 months.'
                , 'No'],
    ['Yes', 'No'],
    ['Yes', 'No'],
    ['Yes', 'No'],
    ['Yes', 'No'],
    ['Yes', 'No']
];

function updateCurrentQ(command) {
    if (currentQ < questions.length) {
//		if(command=='plus'){ currentQ++; }
        if (command == 'minus') {
            currentQ--;
        }
        $('#question-head').html('Q' + currentQ);
        $('#question-text').html(questions[currentQ - 1]);
        updateCurrentChoices();
    }
    else {
        console.log(answers);
    }
}
;

function updateCurrentChoices() {
    if (currentQ == 1 || currentQ == 2) {
        $('#type-checkbox').show();
        $('#type-yesno').hide();
        createCheckbox();
    }
    else {
        $('#type-checkbox').hide();
        $('#type-yesno').show();
        if (currentQ == 4) {
            threechoices();
        }
        else {
            twochoices();
        }
    }
}
;

function createCheckbox() {
    var container = $('#checkbox-ans');
    container.empty();
    for (var i = 0; i < choices[currentQ - 1].length; i++) {
        container.append('<input type="checkbox" autocomplete="off"> ' + choices[currentQ - 1][i] + '<br>');
    }
}
;

function countCheckbox() {
    var checked = $('input:checkbox:checked').length;
    $('#counted').html(checked);
    addAnstoArray(checked);
}
;

function addAnstoArray(ans) {
    answers[currentQ - 1] = ans;
//	$('#text').html(answers[currentQ-1]);
}
;

function threechoices() {
    $('#but1').text('but1');
    $('#but2').text('but2');
    $('#but3').css('visibility', 'visible');
    $('#but3').html('but3');
    setButtonColumn(3);
}
;

function twochoices() {
    $('#but3').css('visibility', 'hidden');
    $('#but1').html('Yes');
    $('#but2').html('No');
    setButtonColumn(2);
}
;

function setButtonColumn(n) {
    if (n == 3) {
        $('.collumn-but').each(function () {
            $(this).attr('class', 'col-md-4 collumn-but');
        });
    }
    if (n == 2) {
        $('.collumn-but').each(function () {
            $(this).attr('class', 'col-md-6 collumn-but');
        });
    }
}
;

$(document).ready(function () {
    updateCurrentQ('initial');
    updateCurrentChoices();
});

$("#submitB").click(function () {
    countCheckbox();

    droolsPostRequest();
});

$('#but1').click(function () {
    addAnstoArray(1);
    updateCurrentQ('plus');
});

$('#but2').click(function () {
    if (currentQ != 4) {
        addAnstoArray(0);
    }
    else if (currentQ == 4) {
        addAnstoArray(2);
    }
    updateCurrentQ('plus');
});

$('#but3').click(function () {
    addAnstoArray(3);
    updateCurrentQ('plus');
});
