function createLauncherPanel() {
  var hostDiv = document.createElement("div");
  hostDiv.setAttribute("class", "launcher-panel");
  // hostDiv.classList.add("hidden");
  hostDiv.appendChild(createLauncherLink(hostDiv));

  document.getElementsByTagName("body")[0].appendChild(hostDiv);

  return hostDiv;
}

function createLauncherLink(hostDiv) {
  var link = document.createElement("link");

  link.setAttribute("rel", "import");
  link.setAttribute("href", "http://localhost:63342/web-components-sandbox/app/web-components/child.html");

  link.onload = function () {
    hostDiv.appendChild(link.import.querySelector('.launcher-main-container'));
  };

  return link;
}

console.log('launcher.js');
createLauncherPanel();
