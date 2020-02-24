
// this creates a html p element and then adds a string to it
var mainContent = document.getElementById("input-frame");
var outputContent = document.getElementById("output-frame");
var footerContent = document.getElementById("footer");

var mainForm = document.createElement("form");
mainForm.setAttribute("id", "event-listener");
var path = "json/data.json"

// move outside of main at some later point

// this disiplays the previously created element on the page
// this creates a html p element and then adds a string to it
var footerPlaceHolder = document.createElement("P");
footerPlaceHolder.append("The current time is: ", Date());

// this disiplays the previously created element on the page
updateContent(footerContent, footerPlaceHolder);
