// Typed.js animation
document.addEventListener('DOMContentLoaded', () => {
  new Typed("#typed", {
    strings: ["Mechanical Engineer"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    showCursor: true,
  });
});

// Particles.js config
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00fff7" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00fff7", "opacity": 0.2, "width": 1 },
    "move": { "enable": true, "speed": 4 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
