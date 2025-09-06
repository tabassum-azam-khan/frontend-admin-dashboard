const ctx = document.getElementById('monthlySalesChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Monthly Sales',
        data: [12, 19, 3, 5, 2, 17, 24, 21,5, 8,10, 2],
        borderColor: '#E65F2B',
        backgroundColor: '#F2EAE5',
        borderWidth: 1
      }]
    },
    options: {
       responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });