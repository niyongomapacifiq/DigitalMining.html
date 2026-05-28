document.getElementById("hazardForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let hazard =
    document.getElementById("hazard").value;

    let severity =
    document.getElementById("severity").value;

    let location =
    document.getElementById("location").value;

    let emergency =
    document.getElementById("emergency").checked;

    let message =
    document.getElementById("message");

    message.style.display = "block";

    message.innerHTML =

    "<h3>✅ Safety Report Submitted</h3>" +

    "<p><b>Worker:</b> " + name + "</p>" +

    "<p><b>Hazard:</b> " + hazard + "</p>" +

    "<p><b>Severity:</b> " + severity + "</p>" +

    "<p><b>Location:</b> " + location + "</p>" +

    "<p><b>Emergency Response:</b> " +

    (emergency ? "YES REQUIRED" : "Not Immediate")

    + "</p>";

    this.reset();

});