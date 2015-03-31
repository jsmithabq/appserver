
function orangeBarrel() {
  alert("Currently under construction...")
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
  $("select#tab1.tab1.countries").selectBoxIt(
    /*{ theme: "bootstrap", }*/
  );
  $("select#tab2.tab2.states").selectBoxIt(
    /*{ theme: "bootstrap", }*/
  );
  $("select#tab3.tab3.styles").selectBoxIt(
    /*{ theme: "bootstrap", }*/
  );
});
