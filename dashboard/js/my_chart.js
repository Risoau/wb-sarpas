const srch = document.getElementById('saranaChart').getContext('2d');
const saranaChart = new Chart(srch, {
    type: 'bar',
    data: {
        labels: ['Router', 'Media Belajar', 'Komputer', 'AC', 'Alat Tulis'],
        datasets: [
        {
            label: 'Sarana',
            borderRadius: 10,
            // borderSkipped: false	
            data: [20, 9, 14, 3, 17, 5],
            backgroundColor: [
                'rgba(56, 229, 77, 0.7)',
                'rgba(49, 225, 247, 0.7)',
                'rgba(251, 54, 64, 0.7)',
                'rgba(246, 55, 236, 0.7)',
                'rgba(255, 109, 40, 0.7)'
            ]
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const bch = document.getElementById('biayaChart').getContext('2d');
const biayaChart = new Chart(bch, {
    type: 'doughnut',
    data: {
        labels: ['Router', 'Media Belajar', 'Komputer', 'AC', 'Alat Tulis'],
        datasets: [
        {
            borderRadius: 10,
            // borderSkipped: false	
            data: [50000, 90000, 120000, 90000, 30000],
            backgroundColor: [
                'rgba(56, 229, 77, 0.7)',
                'rgba(49, 225, 247, 0.7)',
                'rgba(251, 54, 64, 0.7)',
                'rgba(246, 55, 236, 0.7)',
                'rgba(255, 109, 40, 0.7)'
            ]
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});