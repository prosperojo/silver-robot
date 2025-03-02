const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['', '', '', '', '', '', ''],
                datasets: [{
                    data: [3.45, 3.6, 3.8, 4.5, 4.2, 3.8, 3.6],
                    borderColor: 'rgba(0, 128, 0, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        });