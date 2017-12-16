// Navigation Menu
function openNavMenu() {
  document.getElementById("main").style.marginRight = "17%";
  document.getElementById("mySidebar").style.width = "17%";
  document.getElementById("mySidebar").style.marginLeft = "83%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  document.getElementById("section-icons").style.marginLeft = "76.5%";
}

function closeNavMenu() {
  document.getElementById("main").style.marginRight = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("section-icons").style.marginLeft = "93.5%";
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
