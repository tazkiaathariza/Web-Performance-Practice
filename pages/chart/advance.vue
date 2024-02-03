<template>
     <div class="items-center justify-between text-center mb-5">
        <h1 class="text-2xl font-bold text-teal-800">Advance Chart</h1>
        <p class="mt-2">Data Visualization Day 2 - Tazkia Athariza</p>
    </div>  

    <div class="grid my-5 p-3">
        <p class="text-teal-800">✓ Multiple Axis :</p>
        <highchart 
            :options="chartMultipleAxisOptions" 
            :modules="['exporting', 'export-data']"
            class="my-5 mx-3 p-2 bg-gray-50 bg-gray-100 border rounded-2xl hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
        />
        <p class="text-teal-800">✓ Multiple Chart :</p>
        <highchart 
            :options="chartOptions" 
            :modules="['exporting', 'export-data']"
            class="my-5 mx-3 p-2 bg-gray-100 border rounded-2xl hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
        />
        
    </div>
</template>

<script>
definePageMeta({ 
  layout:'forchart'
});

export default {
    data(){
        return{
            chartMultipleAxisOptions: {
                chart:{
                    // type: 'column',
                    backgroundColor: 'transparent',
                },
                title: {
                    text: "Statistik Cuaca di Kota Surabaya",
                    align: 'left',
                },
                subtitle: {
                    text: "Data Cuaca di Kota Surabaya Tahun 2022",
                    align: 'left',
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal', // bisa proximate
                    reversed: true // awalnya pria - wanita, jadi wanita-pria
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                        enabled: false
                        }
                    }
                },
                tooltip: { 
                    enabled: true, 
                    shared: true, 
                    formatter: function(){
                    console.log(this.points);
                    return [`<b>Bulan ${this.x}</b><br/>`].concat(
                        this.points ? this.points.map(point => {
                            return `${point.series.name}: ${point.y}<br/>`
                        }) : []
                     )
                    },
                },
                xAxis:{
                    categories: ["Jan", "Feb", 'Mar', 'Apr', 'Mei', 'Juni', 'Juli', 'Agt', 
                        'Sept', 'Okt', 'Nov', 'Des'
                    ],
                    title: {
                        text: "Bulan"
                    }
                },
                yAxis:[ // multiple axis
                    { // defaultnya (no 0)
                        title: {
                            text: "Temperatur"
                        },
                        labels: {
                            format: '{value}°C'
                        }
                    },
                    { // no 1 (untuk series 1)
                        title: {
                            text: "Kelembapan Udara"
                        },
                        labels: {
                            format: '{value}%'
                        }
                    },
                    { // no 2 (untuk series 2)
                        title: {
                            text: "Kecepatan Angin"
                        },
                        labels: {
                            format: '{value}km/jam'
                        },
                        opposite: true
                    },
                ],
                series: [
                    { // series no 0
                        name: 'Temperatur',
                        type: 'column',
                        data: [25, 26, 25, 28, 29, 30, 31, 34, 32, 33, 35, 30],
                        tooltip: {
                            valueSuffix: '°C'
                        },
                    },
                    { // series 1
                        name: 'Kelembapan Udara',
                        type: 'spline',
                        yAxis: 1, // pake yAxis nomer 1 (berdasarkan array)
                        data: [89, 85, 88, 90, 95, 92, 84, 90, 91, 98, 90, 82],
                        tooltip: { // kasih satuan
                            valueSuffix: '%'
                        },
                        marker: {
                            enabled: false // untuk ngilangin bulet2, dafaultnya true
                        },
                        dashStyle: 'shortdot' 
                    },
                    { // series 2
                        name: 'Kecepatan Angin',
                        type: 'spline',
                        yAxis: 2, // pake yAxis nomer 2 (berdasarkan array)
                        data: [20, 18, 20, 17, 15, 16, 14, 13, 12, 15, 18, 20],
                        tooltip: {
                            valueSuffix: 'km/jam'
                        },
                    },
                ]
                
            },
            chartOptions: {
                chart:{
                    // type: 'column',
                    backgroundColor: 'transparent',
                },
                title: {
                    text: "Statistik Penduduk Surabaya",
                    align: 'left',
                },
                subtitle: {
                    text: "Data Penduduk Surabaya tahun 2018 - 2022",
                    align: 'left',
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal', // bisa proximate
                    reversed: true // awalnya pria - wanita, jadi wanita-pria
                },
                tooltip: { // kalau hover di point, keluar keterangan
                    enabled: true, // bawaan emang true
                    shared: true, // biar yang ke-hover pria dan wanita sekaligus
                    // split: true,
                    formatter: function(){
                    console.log(this.points);
                    return [`<b>Tahun ${this.x}</b><br/>`].concat(
                        this.points ? this.points.map(point => {
                            return `Jumlah 
                            ${point.series.name}: ${point.y}<br/>`
                        }) : []
                     )
                    },
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                        enabled: false
                        }
                    }
                },
                xAxis:{
                    categories: [2018, 2019, 2020, 2021, 2022],
                    title: {
                        text: "Tahun"
                    }
                },
                yAxis:{
                    title: {
                        text: "Jumlah Penduduk"
                    },
                    labels: {
                        format: '{value} juta'
                    }
                },
                series: [
                    {
                        name: "Pria",
                        type: 'column',
                        data: [40, 55, 57, 60, 80]
                    },
                    {
                        name: "Wanita",
                        type: 'column',
                        data: [50, 65, 68, 70, 85]
                    },
                    {
                        name: "Rata-rata",
                        type: 'line',
                        step: 'center',
                        data: [45, 60, 62.5, 65, 82.5 ]
                    },
                    {
                        name: 'Total',
                        type: 'pie',
                        size: '120',
                        center: [85, 10],
                        innerSize: '40%',
                        dataLabels: {
                            enabled: false
                        },
                        data: [
                            {
                                name: 'Pria',
                                y: 292
                            },
                            {
                                name: 'Wanita',
                                y: 338
                            },
                        ]
                    },
                ]
                
            },
        }
    }
};

</script>
