// Called when the landing page
// loads to move all cloud groups
function moveClouds() {
  var pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  moveCloudGroup(pageWidth, "1", .72, -50);
  moveCloudGroup(pageWidth, "2", .51, 350);
  moveCloudGroup(pageWidth, "3", 1.25, 900);
}

// Moves a single cloud group
function moveCloudGroup(pageWidth, id, speed, currentPosition) {
  var elem = document.getElementById("cloud-group-" + id);

  // Motion interval for cloud group movement
  var motionInterval = setInterval(function() {
    currentPosition += speed;
    if (currentPosition > pageWidth) {
      switch (id) {
        // Small single cloud group
        case "1":
          currentPosition = -125;
          break;
        // Large cloud cluster group
        case "2":
          currentPosition = -800;
          break;
        // Large single cloud group
        case "3":
          currentPosition = -300;
          break
        // No cloud group (shouldn't ever happen)
        default:
          currentPosition = 0;
          break
      }
      elem.style.top = Math.floor(Math.random() * 30) + "%";
    }
    elem.style.left = currentPosition + "px";
  },20);
}

// Switch to my work view
function switchViewToMyWork(){
  window.location.href = "my-work.html";
}
