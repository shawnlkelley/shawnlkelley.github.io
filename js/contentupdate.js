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
  var currentIP = localStorage.getItem("IP-address");
  var currentDevice = localStorage.getItem("device-list");
  var text = document.createElement("p");

  text.append(currentHostname, ".",currentDomain," my ip is ",currentIP," and I am assigned to device: ",currentDevice);
  //var textStr = JSON.stringify(text);
  //console.log(textStr);
  //var item = outputContent.childNodes[0]
  //console.log("the next child is ",item.childNodes[0].nextSibling[0]);

  updateContent(outputContent, text);
  //outputContent.innerHTML = text;

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
          e.preventDefault();
          updateOutput();
      },
    false);
}
