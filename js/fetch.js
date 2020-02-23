
function fetchJSONFile(path, callback) {
    console.log("fetching json")
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
                console.log("JSON fetched");
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}
