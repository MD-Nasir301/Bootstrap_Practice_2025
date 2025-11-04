// (() => {
//   "use strict";

//   const forms = document.querySelectorAll(".needs-validation");

//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault(); // ফর্ম সাবমিট হতে দেবে না
//           event.stopPropagation();
//         }
//         form.classList.add("was-validated"); // ভ্যালিডেশন দেখাবে
//       },
//       false
//     );
//   });
// })();

// let aler = document.querySelector(".aler");
// let alertContent = document.querySelector(".alert-content");
// let close = document.querySelector(".close");
// aler.addEventListener("click", () => {
//   alertContent.classList.remove("d-none");
  

// });

// close.addEventListener("click", () => {
//   alertContent.classList.remove("d-block");
//   alertContent.classList.add("d-none");
// });

// const alertList = document.querySelectorAll('.alert')
// const alerts = [...alertList].map(element => new bootstrap.Alert(element))


const slides = document.querySelectorAll('.slider-area .single-slider');
console.log('মোট স্লাইড:', slides.length);

const btn = document.querySelector("button"); // ধরো তোমার button

window.addEventListener("scroll", () => {
  const rect = btn.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;

  console.log("Space below button:", spaceBelow);
});
