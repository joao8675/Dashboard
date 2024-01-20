document.addEventListener('DOMContentLoaded', function() {
    var switcher = document.getElementById('themeSwitcher');
    
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        document.querySelector('.navBackground').classList.toggle('dark');
        document.querySelector('.switcherSlider').classList.toggle('dark');
        document.querySelector('.switcherContainer').classList.toggle('dark');
        document.querySelector('.logo').classList.toggle('dark');
        // Adicione mais classes ou elementos que deseja modificar
    });
});