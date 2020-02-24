var outputContent = parent.document.getElementById("output-frame").contentWindow;

function fetchJSONFile(path, callback) {
    console.log("fetching json")
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
                console.log("JSON fetched");
                outputContent.location.reload();
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}


parent.window.onload = function() {


var mainContent = document.getElementById("app")
var mainForm = document.createElement("form");
mainForm.setAttribute("id", "event-listener");
var path = "json/data.json"


fetchJSONFile(path, function(formContent){
  contentLoop(formContent, mainForm);
  createListener();
});

updateContent(mainContent, mainForm);
}
