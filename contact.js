document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("fullname").value;

let box =
document.getElementById("contactMessage");

box.style.display="block";

box.innerHTML =

"<h3>✅ Message Sent Successfully</h3>" +

"<p>Thank you <strong>" + name +

"</strong>. We have received your message and will contact you as soon as possible.</p>";

this.reset();

});