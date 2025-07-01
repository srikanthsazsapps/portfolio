
// Image Float Animation Script
  const amrImg = document.getElementById("amrImg");
  const bumpyImg = document.getElementById("bumpyImg");

  let angle = 0;

  function animateImages() {
    angle += 0.05;
    const offset = Math.sin(angle) * 5; // 5px float

    amrImg.style.transform = `translateY(${offset}px) scale(1)`;
    bumpyImg.style.transform = `translateY(${-offset}px) scale(1)`;

    requestAnimationFrame(animateImages);
  }

  animateImages();


// Navbar Scroll Effect Script

  let lastScrollY = window.scrollY;
  const navbar = document.getElementById('main-navbar');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      navbar.style.top = "-120px";
    } else {
      navbar.style.top = "0";

      // ✅ Change to transparent only after scrolling down and coming back up
      if (currentScrollY > 0) {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'shadow-md');
      } else {
        // ✅ Restore black background at top of page
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'shadow-md');
      }
    }

    lastScrollY = currentScrollY;
  });

// <!-- Canvas Particle Animation Script -->


    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();



// Mobile Menu Toggle Script
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    let isOpen = false;

    toggleBtn.addEventListener("click", () => {
      isOpen = !isOpen;

      // Animate height
      mobileMenu.style.maxHeight = isOpen ? mobileMenu.scrollHeight + "px" : "0";

      // Toggle icon (hamburger ↔ X)
      if (isOpen) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        `;
      }
    });
  });
// Smooth Scroll Script
  document.addEventListener("DOMContentLoaded", () => { 
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  });
// Dark Mode Toggle Script  

