
function orangeBarrel() {
  alert("Currently under construction...")
}

function changeStyle() {
  var styleBox = document.getElementById("style");
  var theme = String(styleBox.options[styleBox.selectedIndex].value);
  var fileName = "style-" + theme + ".css";
  console.log("New style is: " + fileName);
  var head = document.head || document.getElementsByTagName("head")[0];
/*
  var usLink = document.createElement("style");
  usLink.setAttribute("id", "userstyle");
  usLink.setAttribute("rel", "stylesheet");
  usLink.setAttribute("type", "text/css");
  usLink.setAttribute("href", fileName);
  var oldLink = document.getElementById("userstyle");
  head.replaceChild(usLink, oldLink);
*/
  var i, linkster;
  for (i = 0, linkster = document.getElementsByTagName("link"); i < linkster.length ; i++ ) {
    if ((linkster[i].rel.indexOf( "stylesheet" ) != -1) && linkster[i].id) {
      linkster[i].disabled = true;
      linkster[i].setAttribute("rel", "alternate stylesheet");
      if (linkster[i].id == "style-" + theme) {
        linkster[i].disabled = false;
        linkster[i].setAttribute("rel", "stylesheet");
      }
    }
  }
}

function updateClock() {
  var date = new Date();
  document.getElementById('zulu-date').innerHTML = date.toUTCString();
  setTimeout(updateClock, 1000);
}

function UpdateClock() {
    var date = new Date();
    document.getElementById("zulu-date").firstChild.nodeValue = date.toUTCString();
}

function init() {
  updateClock();
}

window.onload = init;

$(function() {
  $("select#style").selectBoxIt(
    /*{ theme: "bootstrap", }*/
  );
  $("select#fruit").selectBoxIt(
    /*{ theme: "bootstrap", }*/
  );
  $("select#nuts").selectBoxIt(
    /*{ theme: "bootstrap", }*/
  );
});
