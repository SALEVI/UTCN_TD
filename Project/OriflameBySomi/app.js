/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos == 0){
    document.getElementById("navbar-container").style.top = "61px";
  }
 else if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-container").style.top = "0px";
  } else {
    document.getElementById("navbar-container").style.top = "-61px";
  }
  prevScrollpos = currentScrollPos;
} 


// TODO: maybe redo this with @media css @8:00 https://www.youtube.com/watch?v=0ohtVzCSHqs
$(window).resize(function() {
  if ($(window).width() <= 700) {
     document.getElementById("s").style.width ="40px";
     document.getElementById("s").placeholder = "";
     if($(window).width()<=620){
      document.getElementById("logo").style.width = "150px";
      document.getElementById("logo").style.paddingLeft = "25px";
      document.getElementById("logo").style.alignContent = "center";
     }else{
      document.getElementById("logo").style.width = "100%";
      document.getElementById("logo").style.paddingLeft = "0";
     }
}
 else {
  document.getElementById("s").style.width ="170px";
  document.getElementById("s").placeholder = "Search";
  document.getElementById("logo").style.width = "100%";
  document.getElementById("logo").style.paddingLeft = "0";
 }
});