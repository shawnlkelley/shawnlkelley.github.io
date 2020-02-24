  var currentDomain = localStorage.getItem("domain-list");
  var currentHostname = localStorage.getItem("hostname");
  var currentIP = localStorage.getItem("IP-address");
  var currentDevice = localStorage.getItem("device-list");
  var currentTicket = localStorage.getItem("ticket");
  var text = document.createElement("p");
  var outputContent = document.getElementById("output");
  var div = document.createElement("div");
  var ticketNum = document.createElement("p");

  ticketNum.append("Currently working ticket: ", currentTicket);

  text.append(currentHostname, ".",currentDomain," my ip is ",currentIP," and I am assigned to device: ",currentDevice);

  div.append(ticketNum);
  div.append(text);
  outputContent.append(div);
