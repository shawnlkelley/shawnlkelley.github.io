
// this creates a html p element and then adds a string to it
var mainContent = document.getElementById("app");
var outputContent = document.getElementById("output");
var footerContent = document.getElementById("footer");


var mainForm = document.createElement("form");
mainForm.setAttribute("id", "event-listener");
var path = "json/data.json"

// move outside of main at some later point
fetchJSONFile(path, function(formContent){
  contentLoop(formContent, mainForm);
  createListener();
});

updateContent(mainContent, mainForm);

// this creates a html p element and then adds a string to it
var outputPlaceHolder = document.createElement("P");
outputPlaceHolder.append("when a user enters a hostname such as myapp on the right and picks a domain this side should update to say you have chosen myapp.domain.com");

// this disiplays the previously created element on the page
// this creates a html p element and then adds a string to it
var footerPlaceHolder = document.createElement("P");
footerPlaceHolder.append("The current time is: ", Date());

// this disiplays the previously created element on the page
updateContent(footerContent, footerPlaceHolder);
