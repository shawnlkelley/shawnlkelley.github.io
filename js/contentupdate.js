function updateContent(contentId, ContentElement) {
  contentId.append(ContentElement);
}

function updateStorage (e) {
  //1console.log(e);
  if (localStorage.getItem(e.id) === e.value) {
    return;
  } else {
    localStorage.setItem(e.id, e.value);
  }
}

function updateOutput () {
  var currentDomain = localStorage.getItem("domain-list");
  var currentHostname = localStorage.getItem("hostname");

  var text = document.createElement("p");

  text.append(currentHostname, ".",currentDomain);

  updateContent(outputContent, text);

}


function createListener() {
  document.getElementById('event-listener').addEventListener("submit", function(e) {
          //console.log("event triggered");
          for (var i = 0; i < this.childNodes.length; i++) {
            //console.log(this.childNodes[i].lastChild);
              if (this.childNodes[i].lastChild.value !== "") {
                  updateStorage(this.childNodes[i].lastChild);
              };
          };
          //e.preventDefault();
          //updateOutput();
      },
    false);
}
