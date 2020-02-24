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

function createListener() {
  document.getElementById('event-listener').addEventListener("submit", function(e) {
          //console.log("event triggered");
          for (var i = 0; i < this.childNodes.length; i++) {
            //console.log(this.childNodes[i]);
              if (this.childNodes[i].value !== undefined) {
                  updateStorage(this.childNodes[i]);
              };
          };
          event.preventDefault();
          outputContent.location.reload();
      },
    false);
}
