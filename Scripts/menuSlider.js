document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.getElementById('arrow');
    
    arrow.addEventListener('click', function() {
        document.body.classList.toggle('active');
        document.querySelector('.menuSlider').classList.toggle('active');
        // Adicione mais classes ou elementos que deseja modificar
    });
});