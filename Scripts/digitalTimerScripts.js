document.addEventListener('DOMContentLoaded', function () {
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');

    const relogio = setInterval(function time() {
        
        let dataAtual = new Date();
        let hr = dataAtual.getHours();
        let min = dataAtual.getMinutes();

        if (hr < 10) hr = '0' + hr

        if (min < 10) min = '0' + min

        horas.textContent = hr;
        minutos.textContent = min;

    }, 1000);

});