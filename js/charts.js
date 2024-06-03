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
                    barThickness: 20,
                    data: [70000, 60000, 25000, 10000, 10000].reverse(),
                    backgroundColor: '#949191',
                    borderRadius: 8,
                    stack: 'Stack 0'
                },
                {
                    yAxisID: 'first',
                    barThickness: 20,
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
                    barThickness: 20,
                    data: [70000, 60000, 25000, 10000, 10000].reverse(),
                    backgroundColor: '#E2211C',
                    borderRadius: 8,
                    stack: 'Stack 0'
                },
                {
                    yAxisID: 'first',
                    barThickness: 20,
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

    function chart3() {
        var myChart3Colors = [
            "#E2211C",
            "#949191",
        ];
        const ctx = document.getElementById('myChart3').getContext('2d');
        var mychart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["غير المنجزة", "المنجزة"],
                datasets: [{
                    data: [40, 60],
                    fill: false,
                    backgroundColor: myChart3Colors,
                }]
            },
            options: {
                // cutoutPercentage: 65,
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    outerLabels: {
                        fontNormalSize: 12,
                        fontNormalFamily: 'sans-serif',
                    },
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        rtl: true,
                        labels: {
                            usePointStyle: true,
                            boxWidth: 8,
                            boxHeight: 8,
                            padding: 40,
                        }
                    }
                }
            }
        });
    }


    function chart4() {
        var myChart4Colors = [
            '#687777',
            '#E2211C',
            '#E85A56',
            '#CC8683',
            '#C1636C',
            '#2C2B2B',
        ]
        const ctx = document.getElementById('myChart4').getContext('2d');
        var mychart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ['القانون', 'العلوم', 'الاعلام', 'عنوان', 'عنوان', 'عنوان'],
                datasets: [{
                    data: [20, 15, 10, 20, 15, 20],
                    fill: false,
                    backgroundColor: myChart4Colors,
                }]
            },
            options: {
                // cutoutPercentage: 65,
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        rtl: true,
                        labels: {
                            usePointStyle: true,
                            boxWidth: 8,
                            boxHeight: 8,
                            padding: 20,
                        }
                    }
                }
            }
        });
    }


    function chart5() {
        let refrenceId = $('#myChart5')
        var xValues = ['يناير 2024', 'فبراير 2024', 'مارس 2024', 'إبريل 2024'].reverse()
        new Chart(refrenceId, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    yAxisID: 'first',
                    data: [150000, 125000, 75000, 175000].reverse(),
                    borderColor: "#E2211C",
                    borderWidth: 1,
                    label: 'شهر',
                    pointRadius: 5,
                    pointBorderColor: '#E2211C',
                    pointBackgroundColor: '#E2211C',
                    fill: true,
                    backgroundColor: '#E2211C1a'
                }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    first: {
                        beginAtZero: true,
                        position: 'right',
                        ticks:
                        {
                            min: 0,
                            max: 175000,
                            stepSize: 25000,
                        },
                        grid: { display: true },
                    },
                },

                tooltips: {
                    enabled: false
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

                },


            }

        });
    }




    chart1()
    chart2()
    chart3()
    chart4()
    chart5()
})

