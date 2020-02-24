// this creates a html p element and then adds a string to it
var footerContent = document.getElementById("footer");
// creates footer content
var footerPlaceHolder = document.createElement("P");
footerPlaceHolder.append("The current time is: ", Date());
//adds content to footer
footerContent.append(footerPlaceHolder);
