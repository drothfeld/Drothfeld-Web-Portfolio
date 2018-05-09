// SEND button is pressed on contact page
function openEmailClient() {
  // Grabbing form data
  var sender = document.getElementById("email").value; // This field does nothing right now
  var subject = document.getElementById("reason").value;
  var body = document.getElementById("subject").value;

  // Open and pre-fill email client
  // TODO: Eventually, the email should be sent
  //       purely through the server, which will
  //       bypass needing to open an email client
  //       on the users computer.
  window.open('mailto:drothfel@gmail.com?subject=' + subject + '&body=' + body);
}
