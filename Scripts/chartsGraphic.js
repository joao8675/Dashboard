function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Crie dois conjuntos de dados para o gráfico de linha
  var data = {
    labels: ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
    datasets: [
      {
        label: 'ETH',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 3,
        data: Array.from({ length: 8 }, () => getRandomInt(20000, 90000)),
        fill: false, // Não preencher a área sob a linha
        cubicInterpolationMode: 'monotone' // Adiciona curvas suaves
      },
      {
        label: 'BTC',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3,
        data: Array.from({ length: 8 }, () => getRandomInt(20000, 90000)),
        fill: false, // Não preencher a área sob a linha
        cubicInterpolationMode: 'monotone' // Adiciona curvas suaves
      }
    ]
  };
  
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 20000,
        max: 90000,
        ticks: {
          stepSize: 10000
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return 'Exemplo de Dados: ' + context.parsed.y;
          }
        }
      }
    }
  };
  
  // Obtenha o contexto do canvas
  var ctx = document.getElementById('lineChart').getContext('2d');
  
  // Crie o gráfico de linha
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });