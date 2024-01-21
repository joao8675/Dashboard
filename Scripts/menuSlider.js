document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.getElementById('arrow');
    
    arrow.addEventListener('click', function() {
        document.body.classList.toggle('active');
        document.querySelector('.menuSlider').classList.toggle('active');
        document.querySelector('.arrow').classList.toggle('active');
        document.querySelector('.leftArrow').classList.toggle('active');
        document.querySelector('.rightArrow').classList.toggle('active');
        document.querySelector('.i').classList.toggle('active');
        document.querySelector('.nvester').classList.toggle('active');
        document.querySelector('.menuLinks').classList.toggle('active');
        document.querySelector('.leftLinks1').classList.toggle('active');
        document.querySelector('.leftLinks2').classList.toggle('active');
        document.querySelector('.leftLinks3').classList.toggle('active');
        document.querySelector('.leftLinks4').classList.toggle('active');
        document.querySelector('.leftLinks5').classList.toggle('active');
        document.querySelector('.leftLinks6').classList.toggle('active');
        document.querySelector('.leftLinks7').classList.toggle('active');
        document.querySelector('.leftLinks8').classList.toggle('active');
        // Adicione mais classes ou elementos que deseja modificar
    });
});