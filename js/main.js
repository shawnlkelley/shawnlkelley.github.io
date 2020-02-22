
// this creates a html p element and then adds a string to it
var mainContent = document.createElement("p");
// replace with json call to json/data.json
var formContent = data;
var mainForm = document.createElement("form");

// this disiplays the previously created element on the page
mainContent.append("this is where main content goes");
document.getElementById("app").appendChild(mainContent);



for (var key in formContent) {
  if (formContent.hasOwnProperty(key)) {
    mainForm.append(createPageElement(formContent[key]));
  }
}

document.getElementById("app").appendChild(mainForm);

// this creates a html p element and then adds a string to it
var outputContent = document.createElement("p");
outputContent.append("you have chosen myapp.domain.com");


// this disiplays the previously created element on the page
document.getElementById("output").appendChild(outputContent);


// this creates a html p element and then adds a string to it
var footerContent = document.createElement("p");
footerContent.append("The current time is: ", Date());

// this disiplays the previously created element on the page
document.getElementById("footer").appendChild(footerContent);
