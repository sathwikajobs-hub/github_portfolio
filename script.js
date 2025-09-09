document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').innerText = 'Thank you for reaching out!';
  this.reset();
});
