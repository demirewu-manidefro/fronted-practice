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