


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

function clicks() {
 
    goToLocation('/feed');
  
}
document.addEventListener("keypress" , checkKeyPress);
document.addEventListener("click" , clicks);

