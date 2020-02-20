// this creates a html p element and then adds a string to it
var footerContent = document.createElement("p");
footerContent.append("The current time is: ", Date());

// this disiplays the previously created element on the page
document.getElementById("footer").appendChild(footerContent);

// this creates a html p element and then adds a string to it
var mainContent = document.createElement("p");
mainContent.append("this is where main content goes");

// this disiplays the previously created element on the page
document.getElementById("app").appendChild(mainContent);

// this creates a html p element and then adds a string to it
var outputContent = document.createElement("p");
outputContent.append("this is where output content goes");


// this disiplays the previously created element on the page
document.getElementById("output").appendChild(outputContent);
