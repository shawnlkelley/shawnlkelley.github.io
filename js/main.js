

// function for creating a selectable list
function createList(listArray, listId) {
  // creates list element
  var dropDown = document.createElement("select");
  dropDown.setAttribute("id",listId);

  // adds list items to the list
  for (index = 0; index < listArray.length; index++) {
    var listItem = document.createElement("option");
    listItem.setAttribute("value",listArray[index]);
    listItem.append(listArray[index]);
    dropDown.append(listItem);
  }
// returns completed drop down list
  return dropDown;
}

// this creates a html p element and then adds a string to it
var footerContent = document.createElement("p");
footerContent.append("The current time is: ", Date());

// this disiplays the previously created element on the page
document.getElementById("footer").appendChild(footerContent);

// this creates a html p element and then adds a string to it
var mainContent = document.createElement("p");
mainContent.append("this is where main content goes");


// creates a drop down with a list of domains
let domainList = ["domain1.com", "domain2.com", "domain3.com"];

var domainText = document.createElement("p");
domainText.append("Choose a domain: ");
domainText.append(createList(domainList, "domain-list"));


//mainContent.append(domainDrop);

// this disiplays the previously created element on the page
document.getElementById("app").appendChild(mainContent);
document.getElementById("app").appendChild(domainText);
// this creates a html p element and then adds a string to it
var outputContent = document.createElement("p");
outputContent.append("this is where output content goes");


// this disiplays the previously created element on the page
document.getElementById("output").appendChild(outputContent);
