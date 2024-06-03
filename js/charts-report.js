$(document).ready(function () {
    function chart1() {

        const ctx1 = document.getElementById('myChart1').getContext('2d');
        const myChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['باكستان', 'إيران', 'تونس', 'اثيوبيا', 'مصر', 'باكستان', 'إيران', 'تونس', 'اثيوبيا', 'مصر'], // Right-to-left labels
                datasets: [{
                    yAxisID: 'first',
                    barThickness: 25,
                    data: [70000, 60000, 25000, 10000, 10000, 70000, 60000, 25000, 10000, 10000].reverse(),
                    backgroundColor: ['#687777', '#9EA8A9'].reverse(),
                    borderRadius: 5,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    first: {
                        position: 'right',
                        ticks:
                        {
                            beginAtZero: true,
                        },
                        grid: { display: true },
                        title: {
                            display: true,
                            text: 'رأس المال'
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    function chart2() {

        const ctx1 = document.getElementById('myChart2').getContext('2d');
        const myChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['باكستان', 'إيران', 'تونس', 'اثيوبيا', 'مصر', 'باكستان', 'إيران', 'تونس', 'اثيوبيا', 'مصر'], // Right-to-left labels
                datasets: [{
                    yAxisID: 'first',
                    barThickness: 25,
                    data: [70000, 60000, 25000, 10000, 10000, 70000, 60000, 25000, 10000, 10000].reverse(),
                    backgroundColor: ['#687777', '#9EA8A9'].reverse(),
                    borderRadius: 5,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    first: {
                        position: 'right',
                        ticks:
                        {
                            beginAtZero: true,
                        },
                        grid: { display: true },
                        title: {
                            display: true,
                            text: 'رأس المال'
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    chart1()
    chart2()
})

