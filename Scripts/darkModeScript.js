document.addEventListener('DOMContentLoaded', function() {
    var switcher = document.getElementById('themeSwitcher');
    
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        document.querySelector('.navBackground').classList.toggle('dark');
        document.querySelector('.switcherSlider').classList.toggle('dark');
        document.querySelector('.switcherContainer').classList.toggle('dark');
        document.querySelector('.logo').classList.toggle('dark');
        document.querySelector('.menuSlider').classList.toggle('dark');
        document.querySelector('.i').classList.toggle('dark');
        document.querySelector('.nvester').classList.toggle('dark');
        document.querySelector('.arrow').classList.toggle('dark');
        document.querySelector('.menuLinks').classList.toggle('dark');
        document.querySelector('.linkHover1').classList.toggle('dark');
        document.querySelector('.linkHover2').classList.toggle('dark');
        document.querySelector('.linkHover3').classList.toggle('dark');
        document.querySelector('.linkHover4').classList.toggle('dark');
        document.querySelector('.graphic').classList.toggle('dark');
        document.querySelector('.h1Container').classList.toggle('dark');
        document.querySelector('.inf1').classList.toggle('dark');
        document.querySelector('.inf2').classList.toggle('dark');
        document.querySelector('.inf3').classList.toggle('dark');
        document.querySelector('.inf4').classList.toggle('dark');
        document.querySelector('.fastPaymentH2').classList.toggle('dark');
        document.querySelector('.fastPayment').classList.toggle('dark');
        document.querySelector('.userContainer').classList.toggle('dark');
        document.querySelector('.ring').classList.toggle('dark');
        document.querySelector('.userImg').classList.toggle('dark');
        document.querySelector('.ownCard').classList.toggle('dark');
        document.querySelector('.investContainer').classList.toggle('dark');
    });
});