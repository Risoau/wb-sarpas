
// Media Chart Connection {

    const cs = document.getElementById('chartsarana').getContext('2d'); 
    const cd = document.getElementById('chartdana').getContext('2d'); 

// };

// Data Storage {

    // Sarana Chart { 

        const ls = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const ds = [
            20, 9, 14, 3, 17, 5
        ];

        const bcs = [
            'rgba(56, 229, 77, 0.7)',
            'rgba(49, 225, 247, 0.7)',
            'rgba(251, 54, 64, 0.7)',
            'rgba(246, 55, 236, 0.7)',
            'rgba(255, 109, 40, 0.7)'
        ];

    // };

    // Dana Chart {
        
        const ld = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const dd = [
            20, 9, 14, 3, 17, 5
        ];

        const bcd = [
            'rgba(56, 229, 77, 0.7)',
            'rgba(49, 225, 247, 0.7)',
            'rgba(251, 54, 64, 0.7)',
            'rgba(246, 55, 236, 0.7)',
            'rgba(255, 109, 40, 0.7)'
        ];

    // };

// };

// Chart Function {

    // Sarana Chart { 

        const sarana = {
            labels: ls,
            datasets: [
                {
                    label: 'Sarana',
                    borderRadius: 10,
                    data: ds,
                    backgroundColor: bcs,
                }
            ]
        };

        const csp = new Chart( cs, {
            type: 'bar',
            data: sarana,
            options: {}
        });

    // },

    // Dana Chart { 

        const dana = {
            labels: ld,
            datasets: [
                {
                    label: 'Dana',
                    borderRadius: 10,
                    data: dd,
                    backgroundColor: bcd,
                }
            ]
        };

        const cdp = new Chart( cd, {
            type: 'doughnut',
            data: dana,
            options: {}
        });

    // },

// },
