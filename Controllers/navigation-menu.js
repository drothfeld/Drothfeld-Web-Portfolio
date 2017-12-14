// Navigation Menu
function openNavMenu() {
  document.getElementById("main").style.marginLeft = "83%";
  document.getElementById("mySidebar").style.width = "17%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

function closeNavMenu() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

// Easter Eggs
function symbolSpin() {
  var element = document.getElementById("logoSymbol");
  // Check if element is currently spinning
  if (!element.classList.contains("full-spin")) {
    element.classList.add('full-spin');
    // Set timer for removing spin class
    setTimeout(
      function() {
        element.classList.remove('full-spin');
      }, 2500);
  }
}
