// Clear all tnodes
function clearTnodes() {
  var tnode00 = document.getElementById("tnode-00");
  var tnode01 = document.getElementById("tnode-01");
  var tnode02 = document.getElementById("tnode-02");
  var tnode03 = document.getElementById("tnode-03");
  var tnode04 = document.getElementById("tnode-04");
  var tnode05 = document.getElementById("tnode-05");
  var tnode06 = document.getElementById("tnode-06");

  var tnodeImage00 = document.getElementById("tnode-00-image");
  var tnodeImage01 = document.getElementById("tnode-01-image");
  var tnodeImage02 = document.getElementById("tnode-02-image");
  var tnodeImage03 = document.getElementById("tnode-03-image");
  var tnodeImage04 = document.getElementById("tnode-04-image");
  var tnodeImage05 = document.getElementById("tnode-05-image");
  var tnodeImage06 = document.getElementById("tnode-06-image");

  var tnodeList = [tnode00, tnode01, tnode02, tnode03, tnode04, tnode05, tnode06]
  var tnodeImageList = [tnodeImage00, tnodeImage01, tnodeImage02, tnodeImage03, tnodeImage04, tnodeImage05, tnodeImage06]

  for (var tnode in tnodeList) {
    tnodeList[tnode].classList.remove('tnode-active');
    tnodeImageList[tnode].src = "Assets/project-nav-selection-icon.png";
  }
}
// tnode-00
function tnode00Clicked() {
  var tnode = document.getElementById("tnode-00");
  var tnodeImage = document.getElementById("tnode-00-image");
    // Kill tnode if active
    if (tnode.classList.contains("tnode-active")) {
      tnode.classList.remove('tnode-active');
      tnodeImage.src = "Assets/project-nav-selection-icon.png"
    }
    // Activate tnode if not active and close other tnodes
    else {
      clearTnodes();
      tnode.classList.add("tnode-active");
      tnodeImage.src = "Assets/project-nav-selection-icon-selected.png"
    }
}
