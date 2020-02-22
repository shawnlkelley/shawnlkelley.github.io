// function for creating a selectable list
function createList(listObj) {
  // creates list element
  var dropDown = document.createElement("select");
  dropDown.setAttribute("id",listObj.contentId);

  // adds list items to the list
  for (index = 0; index < listObj.listItems.length; index++) {
    var listItem = document.createElement("option");
    listItem.setAttribute("value",listObj.listItems[index]);
    listItem.append(listObj.listItems[index]);
    dropDown.append(listItem);
  }
// returns completed drop down list
  return dropDown;
}

function createText (textObj) {

  var textBox = document.createElement("input");
  textBox.setAttribute("type", "text");
  textBox.setAttribute("id", textObj.contentId);
  textBox.setAttribute("name", textObj.contentId);

  return textBox;
}

function createPageElement (elementContent) {
//create p element for a new line
var contentToAdd = document.createElement("p");
var contentBreak = document.createElement("BR");

//creates label element, sets the for attribute, adds texts to it and
//then appends it to the currtle element
var contentLabel = document.createElement("label");
contentLabel.setAttribute("for", elementContent.contentId);
contentLabel.append(elementContent.contentText);
contentToAdd.appendChild(contentLabel);

//determines what type of input to create
if (elementContent.boxType == "list") {
  //calls function to create a drop down element
  contentToAdd.appendChild(createList(elementContent));
}else if (elementContent.boxType == "textbox") {
  // calls function to create a text box
  contentToAdd.appendChild(createText(elementContent));
}

//document.getElementById("app").appendChild(contentToAdd);
return contentToAdd;
}
