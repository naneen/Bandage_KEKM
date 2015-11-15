
var mainT = ["", "", "", "", "", "", "", ""];
var addT = ["", "", "", "", ""];


function getRequest() {

    return "<batch-execution lookup=\"defaultKieSession\">" +
            "<insert out-identifier=\"message\" return-object=\"true\" entry-point=\"DEFAULT\">" +
            "<kekm.drools.User>" +
            "<questionNumber>" + currentQ + "</questionNumber>" +
            "<answer>" + answers[currentQ - 1] + "</answer>" +
            "<mainTreatment>" +
            "<boolean>" + mainT[0] + "</boolean>" +
            "<boolean>" + mainT[1] + "</boolean>" +
            "<boolean>" + mainT[2] + "</boolean>" +
            "<boolean>" + mainT[3] + "</boolean>" +
            "<boolean>" + mainT[4] + "</boolean>" +
            "<boolean>" + mainT[5] + "</boolean>" +
            "<boolean>" + mainT[6] + "</boolean>" +
            "<boolean>" + mainT[7] + "</boolean>" +
            "</mainTreatment>" +
            "<additionalTreatment>" +
            "<boolean>" + addT[0] + "</boolean>" +
            "<boolean>" + addT[1] + "</boolean>" +
            "<boolean>" + addT[2] + "</boolean>" +
            "<boolean>" + addT[3] + "</boolean>" +
            "<boolean>" + addT[4] + "</boolean>" +
            "</additionalTreatment>" +
            "</kekm.drools.User>" +
            "</insert>" +
            "<fire-all-rules/>" +
            "</batch-execution>";
}

function droolsPostRequest() {

    $.ajax({
        type: "POST",
        url: "http://ec2-52-33-3-124.us-west-2.compute.amazonaws.com:8080/execution/services/rest/server/containers/awsdrools",
        dataType: "xml",
        contentType: "application/xml",
        data: getRequest(),
        success: function (res) {
            console.log(res);
            postSuccess($(res).find("results").text());
        },
        error: function (request, error) {
            alert("XML: not working! " + error);

            console.log(request);
            console.log(error);
        }
    });

}

function postSuccess(res) {

    var xmlString = res;
    var xmlDocument = $.parseXML(xmlString);
    var $xml = $(xmlDocument);

    console.log($xml);
    currentQ = $xml.find('nextQuestion').text();
    

    var i = 0;
    $xml.find("mainTreatment").each(function () {
        $(this).find('boolean').each(function () {
            mainT[i] = $(this).text();
            i++;
        });
    });

    var ii = 0;
    $xml.find("additionalTreatment").each(function () {
        $(this).find('boolean').each(function () {
            addT[ii] = $(this).text();
            ii++;
        });
    });

    if(currentQ == -1){
        renderResult();
    }
    updateCurrentQ('plus');

}
