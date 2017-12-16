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
