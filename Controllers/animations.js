// Symbol Spin
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
