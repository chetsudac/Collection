$(document).ready(function() {$("#1").draggable(); })

$(document).ready(function() {$("#2").draggable(); })

$(document).ready(function() {$("#3").draggable(); })

$(document).ready(function() {$("#4").draggable(); })

$(document).ready(function() {$("#5").draggable();})

$(document).ready(function() {$("#6").draggable();})

$(document).ready(function() {$("#7").draggable();})

$(document).ready(function() {$("#8").draggable();})

$(document).ready(function() {$("#9").draggable();})
$(document).ready(function() {$("#10").draggable();})
$(document).ready(function() {$("#11").draggable();})
$(document).ready(function() {$("#12").draggable();})
$(document).ready(function() {$("#13").draggable();})
$(document).ready(function() {$("#14").draggable();})
$(document).ready(function() {$("#15").draggable();})
$(document).ready(function() {$("#16").draggable();})
$(document).ready(function() {$("#17").draggable();})
$(document).ready(function() {$("#18").draggable();})
$(document).ready(function() {$("#19").draggable();})
$(document).ready(function() {$("#20").draggable();})
$(document).ready(function() {$("#21").draggable();})
$(document).ready(function() {$("#22").draggable();})
$(document).ready(function() {$("#23").draggable();})
$(document).ready(function() {$("#24").draggable();})
$(document).ready(function() {$("#25").draggable();})
$(document).ready(function() {$("#26").draggable();})
$(document).ready(function() {$("#27").draggable();})
$(document).ready(function() {$("#28").draggable();})
$(document).ready(function() {$("#29").draggable();})
$(document).ready(function() {$("#30").draggable();})
$(document).ready(function() {$("#31").draggable();})
$(document).ready(function() {$("#32").draggable();})
$(document).ready(function() {$("#33").draggable();})
$(document).ready(function() {$("#34").draggable();})
$(document).ready(function() {$("#35").draggable();})
$(document).ready(function() {$("#36").draggable();})
$(document).ready(function() {$("#37").draggable();})
$(document).ready(function() {$("#38").draggable();})
$(document).ready(function() {$("#39").draggable();})
$(document).ready(function() {$("#40").draggable();})

function onloadFunction() {
  var amount = 40; 
  var arrayIDs = ["1", "2", "3", "4", "5", "6", "7", "8",
  "9", "10", "11", "12", "13", "14", "15", "16",
  "17", "18", "19", "20", "21", "22", "23", "24",
  "25", "26", "27", "28", "29", "30", "31", "32",
  "33", "34", "35", "36", "37", "38", "39", "40"];
  for (i=1;i<=amount;i++) {

   var element = document.getElementById(arrayIDs[i-1]);
   var positionInfo = element.getBoundingClientRect();
   var imgHeight = positionInfo.height;
   var imgWidth = positionInfo.width;

   var screenWidth = window.innerWidth;
   var screenHeight = window.innerHeight;

   var imgLeft = Math.floor(Math.random() * (screenWidth - imgWidth)); 
   var imgTop= Math.floor(Math.random() * (screenHeight - imgHeight)); 

   document.getElementById(arrayIDs[i-1]).style.top = imgTop+"px";
   document.getElementById(arrayIDs[i-1]).style.left = imgLeft+"px";
  }
}