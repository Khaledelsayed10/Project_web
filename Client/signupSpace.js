var fname = document.querySelector("#fname");
var lname = document.querySelector("#lname");
var age = document.querySelector("#age");
var email = document.querySelector("#email");
var pw = document.querySelector("#pw");
var cpw = document.querySelector("#cpw");
var btn = document.querySelector("#btn-signup");
var allInputs = document.querySelectorAll(".input");
var form = document.forms[0];
var div = document.querySelector(".p-invalid-container");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var p = document.createElement("p");
p.classList.add("p-invalid");
p.textContent = "Please fill all the fields correctly.";

allInputs.forEach((e) => {
   e.addEventListener("keyup", () => {
      if (e.value.length < 1) {
         e.classList.add("invalid");
         div.appendChild(p);
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

// fname

fname.addEventListener("keyup", () => {
   if (fname.value.length < 3) {
      fname.classList.add("invalid");
   } else {
      fname.classList.remove("invalid");
   }
});

// lname

lname.addEventListener("keyup", () => {
   if (lname.value.length < 3) {
      lname.classList.add("invalid");
   } else {
      lname.classList.remove("invalid");
   }
});

//age

age.addEventListener("keyup", () => {
   if (age.value.length !== 2) {
      age.value = age.value.slice(age.value.length - 2, age.value.length);
      age.classList.add("invalid");
   } else if (age.value < 18 || age.value > 35) {
      age.classList.add("invalid");
   } else {
      age.classList.remove("invalid");
   }
});

email.addEventListener("keyup", () => {
   if (!email.value.match(mailformat)) {
      email.classList.add("invalid");
   } else {
      email.classList.remove("invalid");
   }
});

pw.addEventListener("keyup", () => {
   if (pw.value.length < 6) {
      pw.classList.add("invalid");
   } else {
      pw.classList.remove("invalid");
   }
});

cpw.addEventListener("keyup", () => {
   if (cpw.value !== pw.value) {
      cpw.classList.add("invalid");
   } else {
      cpw.classList.remove("invalid");
   }
});
