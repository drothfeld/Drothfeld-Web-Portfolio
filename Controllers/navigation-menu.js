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
