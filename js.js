

  (() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault(); // ফর্ম সাবমিট হতে দেবে না
        event.stopPropagation();
      }
      form.classList.add('was-validated'); // ভ্যালিডেশন দেখাবে
    }, false);
  });
})();
