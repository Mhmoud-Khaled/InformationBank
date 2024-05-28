$(document).ready(function () {
    function chart1() {

        const ctx1 = document.getElementById('myChart1').getContext('2d');
        const myChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['قسم القانون', 'عنوان', 'عنوان', 'عنوان', 'عنوان'].reverse(), // Right-to-left labels
                datasets: [{
                    yAxisID: 'first',
                    label: 'مكتملة',
                    barThickness: 25,
                    data: [70000, 60000, 25000, 10000, 10000].reverse(),
                    backgroundColor: '#949191',
                    borderRadius: 8,
                    stack: 'Stack 0'
                },
                {
                    yAxisID: 'first',
                    barThickness: 25,
                    label: 'غير مكتملة',
                    data: [40000, 30000, 14000, 10000, 5000].reverse(),
                    backgroundColor: '#E2211C',
                    borderRadius: 8,
                    stack: 'Stack 0'
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
                            text: 'العدد'
                        }
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        rtl: true,
                        labels: {
                            useBorderRadius: true,
                            borderRadius: 5,
                            boxWidth: 10,
                            boxHeight: 10,
                            padding: 40,
                        }
                    }
                }
            }
        });
    }
    function chart2() {

        const ctx = document.getElementById('myChart2').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['قسم القانون', 'عنوان', 'عنوان', 'عنوان', 'عنوان'].reverse(), // Right-to-left labels
                datasets: [{
                    yAxisID: 'first',
                    label: 'مكتملة',
                    barThickness: 25,
                    data: [70000, 60000, 25000, 10000, 10000].reverse(),
                    backgroundColor: '#E2211C',
                    borderRadius: 8,
                    stack: 'Stack 0'
                },
                {
                    yAxisID: 'first',
                    barThickness: 25,
                    label: 'غير مكتملة',
                    data: [40000, 30000, 14000, 10000, 5000].reverse(),
                    backgroundColor: '#949191',
                    borderRadius: 8,
                    stack: 'Stack 0'
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
                            text: 'العدد'
                        }
                    },
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        rtl: true,
                        labels: {
                            useBorderRadius: true,
                            borderRadius: 5,
                            boxWidth: 10,
                            boxHeight: 10,
                            padding: 40,
                        }
                    }
                }
            }
        });
    }
    chart1()
    chart2()
})

