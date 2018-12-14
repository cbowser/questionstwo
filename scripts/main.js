//Defining variable based on unique ID

var audio1 = document.getElementById("audioID");

//Example of an HTML Audio/Video Method

function playAudio() {
  audio1.play();
}


var audio = $("#mySoundClip")[0];
audio.play();







var e = document.getElementById('parent');
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}


$(function(){
    $('#full-width').draggable({
      handle: ".modal-header"
  });
    $('#full-width').resizable();

});


$(function(){
    $('#full').draggable({
      handle: ".modal-header"
  });
    $('#full').resizable();

});



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}s




function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
}
