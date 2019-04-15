/*
 Video Player
*/

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    videoplayerClose();
  }
}

function videoplayerOpen() {
  var videoplayer = document.getElementById("video-cont");
  window.scrollTo(0, 0);
  document.getElementById('videoplayer').style.display = 'block';
  document.getElementById('close-bnt').style.display = 'block';
  videoplayer.play();
}

function videoplayerClose() {
  var videoplayer = document.getElementById("video-cont");
  document.getElementById('videoplayer').style.display = 'none';
  document.getElementById('close-bnt').style.display = 'none';
  videoplayer.pause();
}
