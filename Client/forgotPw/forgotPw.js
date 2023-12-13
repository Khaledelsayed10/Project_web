var email = document.querySelector("#email");
var btn = document.querySelector("#btn-submit");
var allInputs = document.querySelectorAll(".input");
var div = document.querySelector(".p-invalid-container");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var p = document.createElement("p");
p.classList.add("p-invalid");
p.textContent = "Please fill all the fields correctly.";

allInputs.forEach((e) => {
   e.addEventListener("keyup", () => {
      if (e.value.length < 1) {
         e.classList.add("invalid");
      } else {
         e.classList.remove("invalid");
         p.remove();
      }
   });

   btn.addEventListener("click", (event) => {
      if (e.classList.contains("invalid") || e.value.length < 1) {
         div.appendChild(p);
         event.preventDefault();
      }
   });
});

email.addEventListener("keyup", () => {
   if (!email.value.match(mailformat)) {
      email.classList.add("invalid");
   } else {
      email.classList.remove("invalid");
   }
});
