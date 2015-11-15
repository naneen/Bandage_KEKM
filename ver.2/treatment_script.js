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
    ['Yes, in last 7 days.'
            , 'Yes, in prior 2 months.'
            , 'No'],
    ['Yes', 'No'],
    ['Yes', 'No'],
    ['Yes', 'No'],
    ['Yes', 'No'],
    ['Yes', 'No']
];
var mainTreatment = [
		{
			title: "Main Treatment 1: Psychoeducation", 
			content: "<ul type=\"disc\"><li>Depression is a very common problem that can happen to anybody.</li>" +
					"<li>Depressed people tend to have unrealistic negative opinions about themselves, their life and their future.</li>" +
					"<li>Effective treatment is possible. It tends to take at least a few weeks before treatment reduces the depression.</li>" +
					"<li>The following need to be emphasized:</li>" +
						"<tab1> - continuing, as far as possible, activities that used to be interesting or give pleasure;</tab1><br>" +
						"<tab1> - trying to maintain a regular sleep cycle (i.e., going to be bed at the same time every night);</tab1><br>" +
						"<tab1> - the benefit of regular physical activity, as far as possible;</tab1><br>" +
						"<tab1> - the benefit of regular social activity, including participation in communal social activities, as far as possible;</tab1><br>" +
						"<tab1> - recognizing thoughts of self-harm or suicide and coming back for help when these occur;</tab1><br>" +
						"<tab1> - in older people, the importance of continuing to seek help for physical health problems.</tab1><br></ul>"
		}, 
		{
			title: "Main Treatment 2: Addressing current psychosocial stressors", 
			content: "<ul type=\"disc\"><li>Offer the person an opportunity to talk, preferably in a private space. Ask for the person’s subjective understanding of the causes of his or her symptoms.</li>" +
					"<li>Ask about current psychosocial stressors and, to the extent possible, address pertinent social issues and problem-solve for psychosocial stressors or relationship difficulties with the help of community services/resources.</li>" +
					"<li>Assess and manage any situation of maltreatment, abuse (e.g. domestic violence) and neglect (e.g. of children or older people). Contact legal and community resources, as appropriate.</li>" +
					"<li>Identify supportive family members and involve them as much as possible and appropriate.</li>" +
					"<li>In children and adolescents:</li>" +
						"<tab1> -  Assess and manage mental, neurological and substance use problems (particularly depression) in parents (see mhGAP-IG Master Chart).</tab1><br>" +
						"<tab1> -  Assess parents’ psychosocial stressors and manage them to the extent possible with the help of community services/resources.</tab1><br>" +
						"<tab1> -  Assess and manage maltreatment, exclusion or bullying (ask child or adolescent directly about it).</tab1><br>" +
						"<tab1> -  If there are school performance problems, discuss with teacher on how to support the student.</tab1><br>" +
						"<tab1> -  Provide culture-relevant parent skills training if available. <a href=\"http://www.paho.org/mhgap/en/int_management.html\">» INT</a></tab1><br></ul>"
		}, 
		{	
			title: "Main Treatment 3: Reactivate social networks", 
			content: "<ul type=\"disc\"><li>Identify the person’s prior social activities that, if re- initiated, would have the potential for providing direct or indirect psychosocial support (e.g. family gatherings, outings with friends, visiting neighbours, social activities at work sites, sports, community activities).</li>" +
					"<li>Build on the person’s strengths and abilities and actively encourage to resume prior social activities as far as is possible.</li></ul>"
		}, 
		{
			title: "Main Treatment 4: Structured physical activity programme", 
			content: "<ul type=\"disc\"><li>Organization of physical activity of moderate duration (e.g. 45 minutes) 3 times per week.</li>" +
					"<li>Explore with the person what kind of physical activity is more appealing, and support him or her to gradually increase the amount of physical activity, starting for example with 5 minutes of physical activity.</li></ul>"
		}, 
		{
			title: "Main Treatment 5: Offer regular follow-up", 
			content: "<ul type=\"disc\"><li>Follow up regularly (e.g. in person at the clinic, by phone, or through community health worker).</li>" +
					"<li>Re-assess the person for improvement (e.g. after 4 weeks).</li></ul>"
		}, 
		{
			title: "Main Treatment 6: Consider antidepressants", 
			content: "<ul type=\"disc\"><li>In selecting an antidepressant for the person, consider the symptom pattern of the person, the side-effect profile of the medication, and the efficacy of previous antidepressant treatments, if any.</li>" +
					"<li>Combining antidepressants with other psychotropic medication requires supervision by, or consultation with,a specialist.</li>" +
					"<li>Tell person and family about:</li>" +
						"<tab1> -  the delay in onset of effect;</tab1><br>" +
						"<tab1> -  potential side-effects and the risk of these symptoms, to seek help promptly if these are distressing, and how to identify signs of mania;</tab1><br>" +
						"<tab1> -  the possibility of discontinuation / withdrawal symptoms on missing doses, and that these symptoms are usually mild and self-limiting but can occasionally be severe, particularly if the medication is stopped abruptly. However, antidepressants are not addictive;</tab1><br>" +
						"<tab1> -  the duration of the treatment, noting that antidepressants are effective both for treating depression and for preventing its recurrence.</tab1><br></ul>"
		}, 
		{
			title: "Main Treatment 7", 
			content: "<ul type=\"disc\"><li>If available, consider interpersonal therapy, behavioural activation or cognitive behavioural therapy. <a href=\"http://www.paho.org/mhgap/en/int_management.html\">» INT</a></li>"}, 
		{
			title: "Main Treatment 8", 
			content: "<ul type=\"disc\"><li>DO NOT manage the complaint with injections or other ineffective treatments (e.g. vitamins).</li>"
		}
];
var addTreatment = [
	{
		title: "Additional Treatment 1: OTH Suggestion", 
		content: "<ul type=\"disc\"><li>Assess for Other Significant Emotional or Medically Unexplained Somatic Complaints <a href=\"http://www.paho.org/mhgap/en/Other_flowchart.html\">» OTH</li>"
	}, 
	{
		title: "Additional Treatment 2: Bipolar Suggestion", 
		content: "<ul type=\"disc\"><li>Manage the bipolar depression. See Bipolar Disorder Module. <a href=\"http://www.paho.org/mhgap/en/bipolar_flowchart.html\">» BPD</a></li>" +
				"<li>People with bipolar depression are at risk of developing mania. Their treatment is different!</li></ul>"
	}, 
	{
		title: "Additional Treatment 3: Psy Suggestion", 
		content: "<ul type=\"disc\"><li>Treatment for an antipsychotic in consultation with a specialist. See Psychosis Module. <a href=\"http://www.paho.org/mhgap/en/Psychosis_flowchart.html\">» PSY</a></li>"
	}, 
	{
		title: "Additional Treatment 4: Concurrent Condition Suggestion", 
		content: "<ul type=\"disc\"><li>Manage the concurrent condition</li>" +
				"<li>Take care the concurrent medical illness, because depression may be reduced adherence.</li></ul>"
	}, 
	{
		title: "Additional Treatment 5: Pregnancy Suggestion", 
		content: "<ul type=\"disc\"><li>During pregnancy or breast-feeding antidepressants should be avoided as far as possible.</li>" +
				"<li>If no response to psychosocial treatment, consider using lowest effective dose of antidepressants.</li>" +
				"<li>CONSULT A SPECIALIST.</li>" +
				"<li>If breastfeeding, avoid long acting medication such as fluoxetine.</li></ul>"
	}
];

function updateCurrentQ(command) {

    if (currentQ <= questions.length) {
        if (command == 'minus') {
            currentQ--;
        }
        // if(command=='plus'){ 
        // 	currentQ++; 
        // }
        console.log("currentQ: " + currentQ);
        $('#question-head').html('Q' + currentQ);
        $('#question-text').html(questions[currentQ - 1]);
        updateCurrentChoices();
    }
};

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
};

function createCheckbox() {
    var container = $('#checkbox-ans');
    container.empty();
    for (var i = 0; i < choices[currentQ - 1].length; i++) {
        container.append('<input type="checkbox" autocomplete="off">   ' + choices[currentQ - 1][i] + '<br>');
    }
};

function countCheckbox() {
    var checked = $('input:checkbox:checked').length;
    $('#counted').html(checked);
    addAnstoArray(checked);
};

function addAnstoArray(ans) {
    answers[currentQ - 1] = ans;
};

function threechoices(){
	$('#but1').html(choices[currentQ-1][0]);
	$('#but2').html(choices[currentQ-1][1]);
	$('#but3').css('visibility', 'visible');
	$('#but3').html(choices[currentQ-1][2]);
	setButtonColumn(3);
};

function twochoices(){
	$('#but3').css('visibility', 'hidden');	
	$('#but1').html(choices[currentQ-1][0]);
	$('#but2').html(choices[currentQ-1][1]);
	setButtonColumn(2);
};

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
};

function renderResult() {
	$('.content').empty();
	var numOfSuggestion = 1;
	for (i = 0 ; i < mainT.length ; i++) {
		if (mainT[i] == "true") {
			var title = "Suggestion " + numOfSuggestion++;
			var content = mainTreatment[i].content;
			var suggestion = "<div class=\"container suggestion\">" + "<h3>" + title + "</h3>" + "<h5>" + content + "</h5></div>";
			$('.content').append(suggestion);
		}
	}

	$('.content').append("<br>");

	for (i = 0 ; i < addT.length ; i++) {
		if (addT[i] == "true") {
			var title = "Suggestion " + numOfSuggestion++;
			var content = addTreatment[i].content;
			var suggestion = "<div class=\"container suggestion\">" + "<h3>" + title + "</h3>" + "<h5>" + content + "</h5></div>";
			$('.content').append(suggestion);
		}
	}
};

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
    droolsPostRequest();
    // updateCurrentQ('plus');
});

$('#but2').click(function () {
    if (currentQ != 4) {
        addAnstoArray(0);
    }
    else if (currentQ == 4) {
        addAnstoArray(2);
    }
    droolsPostRequest();
    // updateCurrentQ('plus');
});

$('#but3').click(function () {
    addAnstoArray(3);
    droolsPostRequest();
    // updateCurrentQ('plus');
});
