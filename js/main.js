
// this creates a html p element and then adds a string to it
var mainContent = document.createElement("p");
var mainForm = document.createElement("form");
var path = "json/data.json"

// this disiplays the previously created element on the page
mainContent.append("this is where main content goes");
document.getElementById("app").appendChild(mainContent);

// move outside of main at some later point
fetchJSONFile(path, function(formContent){
  contentLoop(formContent, mainForm);
});

document.getElementById("app").appendChild(mainForm);

// this creates a html p element and then adds a string to it
var outputContent = document.createElement("p");
outputContent.append("when a user enters a hostname such as myapp on the right and picks a domain this side should update to say you have chosen myapp.domain.com");

// this disiplays the previously created element on the page
document.getElementById("output").appendChild(outputContent);

// this creates a html p element and then adds a string to it
var footerContent = document.createElement("p");
footerContent.append("The current time is: ", Date());

// this disiplays the previously created element on the page
document.getElementById("footer").appendChild(footerContent);
