/* Initialize ScrollReveal */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-container', { origin: 'bottom' }); // Updated selector
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* Contact Form Handling */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const messageDiv = document.getElementById('form-message');
    const submitBtn = contactForm.querySelector('.btn');
    const originalBtnText = submitBtn.innerText;

    // Basic Client-side Validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      messageDiv.innerText = "Please fill in all required fields.";
      messageDiv.className = "error";
      return;
    }

    // Loading State
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;
    messageDiv.innerText = "";

    // Prepare Data
    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://formsubmit.co/ajax/demirewumanidefro@gmail.com", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        messageDiv.innerText = "Message sent successfully!";
        messageDiv.className = "success";
        contactForm.reset();
      } else {
        messageDiv.innerText = result.message || "Something went wrong. Please try again.";
        messageDiv.className = "error";
      }
    } catch (error) {
      console.error('Error:', error);
      messageDiv.innerText = "Failed to send message. Check your connection.";
      messageDiv.className = "error";
    } finally {
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}


/* Sticky Navbar */
let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
  // Sticky header
  header.classList.toggle('sticky', window.scrollY > 100);

  // Scroll Spy
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        let activeLink = document.querySelector('header nav a[href*=' + id + ']');
        if (activeLink) activeLink.classList.add('active');
      });
    }
  });

  // Remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* Menu Icon Toggle */
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Resume Tabs */
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

if (resumeBtns.length > 0) {
  resumeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and details
      resumeBtns.forEach(b => b.classList.remove('active'));
      resumeDetails.forEach(detail => detail.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Show corresponding detail
      // We use the data-target attribute if present, otherwise fallback to index
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        const targetDetail = document.getElementById(targetId);
        if (targetDetail) {
          targetDetail.classList.add('active');
        }
      } else if (resumeDetails[index]) {
        resumeDetails[index].classList.add('active');
      }
    });
  });
}
