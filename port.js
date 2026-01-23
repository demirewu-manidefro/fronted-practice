const resumeBtn = document.querySelectorAll(".resume-btn");
resumeBtn.forEach((btn, idx) =>{
    btn.addEventListener('click',()=>{
        const  resumeDetail = document.querySelectorAll('.resume-detail');

        resumeBtn.forEach(btn =>{
            btn.classList.remove('active');
        })
        btn.classList.add('active');
        resumeDetail.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

  // Select the menu icon and the nav
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('header nav');

  // Toggle the 'active' class on click
  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Optional: close menu when a link is clicked
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

