  var currentDomain = localStorage.getItem("domain-list");
  var currentHostname = localStorage.getItem("hostname");
  var currentIP = localStorage.getItem("IP-address");
  var currentDevice = localStorage.getItem("device-list");
  var text = document.createElement("p");
  var outputContent = document.getElementById("output");

  text.append(currentHostname, ".",currentDomain," my ip is ",currentIP," and I am assigned to device: ",currentDevice);

  outputContent.append(text);
