function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  var data = {
    labels: ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
    datasets: [
      {
        label: 'ETH',
        backgroundColor: '#fff',
        borderColor: '#ff0000',
        borderWidth: 2.5,
        data: Array.from({ length: 8 }, () => getRandomInt(40000, 70000)),
        fill: false,
        cubicInterpolationMode: 'monotone'
      },
      {
        label: 'BTC',
        backgroundColor: '#fff',
        borderColor: '#001eff',
        borderWidth: 2.5,
        data: Array.from({ length: 8 }, () => getRandomInt(20000, 50000)),
        fill: false,
        cubicInterpolationMode: 'monotone'
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
  
  var ctx = document.getElementById('lineChart').getContext('2d');
  
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });