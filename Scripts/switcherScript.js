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
        document.querySelector('.insideBelowInfos').classList.toggle('dark');
        // Adicione mais classes ou elementos que deseja modificar
    });
});