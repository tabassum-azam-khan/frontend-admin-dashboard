const ctxOrder = document.getElementById('orderStatusChart').getContext('2d');

  new Chart(ctxOrder, {
    type: 'pie',
    data: {
      labels: [ 'Pending', 'Returned', 'Shipped', 'Delivered', 'Cancelled'],
      datasets: [{
        label: 'Order Status',
        data: [12, 3, 7, 25, 2],
        backgroundColor: [
          '#FFB74D', 
          '#42A5F5', 
          '#66BB6A', 
          '#AB47BC', 
          '#EF5350' 
        ],
        borderWidth: 1
      }]
    },
    options: {
       responsive: true,
    }
  });