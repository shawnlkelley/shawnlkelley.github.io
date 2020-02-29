var outputContent = parent.document.getElementById("output-frame").contentWindow;

function updateContent(contentId, ContentElement) {
  contentId.append(ContentElement);
}

function updateStorage (e) {
  //console.log(e);
  //console.log(e.id);
  //console.log(e.value);
  if (localStorage.getItem(e.lastChild.id) === e.lastChild.value) {
    return;
  } else {
    localStorage.setItem(e.lastChild.id, e.lastChild.value);
  }
}

function createListener() {
  document.getElementById('event-listener').addEventListener("submit", function(e) {
          //console.log("event triggered");
          for (var i = 0; i < this.childNodes.length; i++) {
            //console.log(this.childNodes[i]);
              if (this.childNodes[i].value !== "" && this.childNodes[i].nodeName !== "BR") {
                  updateStorage(this.childNodes[i]);
              };
          };
          e.preventDefault();
          outputContent.location.reload();
      },
    false);
}

// pulls JSON files
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

// main code that runs once the parent page has loaded all content
parent.window.onload = function() {
//
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
