<template>

    <div class="items-center justify-between text-center my-2">
        <h1 class="text-2xl font-bold">Basic Chart</h1>
        <p class="mt-2 mb-5">Data Visualization Day 1 - Tazkia Athariza</p>
    </div>  

    <div class="grid lg:grid-cols-2">
        <div>
            <p class="text-teal-800 my-3 mx-3 pt-3">✓ Spline chart :</p>
            <highchart 
                :options="chartOptions" 
                :modules="['exporting', 'export-data']"
                class="my-5 mx-3 p-2 bg-gray-50 border rounded-2xl
                 hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
            />
        </div>
        <div>
            <p class="text-teal-800 my-3 mx-3 pt-3">✓ Column chart :</p>
            <highchart 
                :options="chartColumnOptions" 
                :modules="['exporting', 'export-data']"
                class="my-5 mx-3 p-2 bg-gray-50 border rounded-2xl
                 hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
            />
        </div>
        <div>
            <p class="text-teal-800 my-3 mx-3 p-1">✓ Area chart :</p>
            <highchart 
                :options="chartAreaOptions" 
                :modules="['exporting', 'export-data']"
                class="my-5 mx-3 p-2 bg-gray-50 border rounded-2xl
                 hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
            />
        </div>
        <div>
            <p class="text-teal-800  my-3 mx-3 p-1">✓ Bar chart :</p>
            <highchart 
                :options="chartBarOptions" 
                :modules="['exporting', 'export-data']"
                class="my-5 mx-3 p-2 bg-gray-50 border rounded-2xl
                 hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
            />
        </div>
        <div>
            <p class="text-teal-800 my-3 mx-3 p-1">✓ Pie chart :</p>
               <highchart 
                :options="pieChartOptions" 
                :modules="['exporting', 'export-data']"
                class="my-5 mx-3 p-2 bg-gray-50 border rounded-2xl
                 hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
            />
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            chartOptions: {
                chart:{
                    type: 'spline',
                    backgroundColor: 'transparent',
                },
                title: {
                    text: "Statistik Penduduk Lombok",
                    style: { // css
                      //  fontSize: '30px',
                    }
                },
                subtitle: {
                    text: "Data Penduduk Lombok tahun 1995 - 2000"
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                tooltip: { // kalau hover di point, keluar keterangan
                    enabled: true, // bawaan emang true
                    /* formatter: function() {
                        return `<b>Tahun ${this.x}</b> 
                        <br/> 
                        <p>Jumlah penduduk ${this.series.name} : ${this.point.y}</p>`
                    }, */
                    // pilih 1 antara pake format atau formatter, ga bisa dua-duanya
                // format: 'Tahun {x} <br> jumlah penduduk {point.y}'
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
                    spline: {
                        dataLabels: {
                        enabled: false
                        }
                    }
                },
                xAxis:{
                    categories: ['1995', '1996', '1997', '1998', '1999'],
                    title: {
                        text: "Tahun"
                    }
                },
                yAxis:{
                    title: {
                        text: "Jumlah Penduduk"
                    }
                },
                series: [
                    {
                        name: "Pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "Wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            chartColumnOptions: {
                chart:{
                    type: 'column',
                    backgroundColor: 'transparent',
                },
                credits: { //logo highcjhart
                    enabled: false
                },
                title: {
                    text: "Statistik Penduduk Lombok"
                },
                subtitle: {
                    text: "Data Penduduk Lombok tahun 1995 - 2000"
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                tooltip: { // kalau hover di point, keluar keterangan
                    enabled: true, // bawaan emang true
                    shared: true,
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
                        stacking: 'normal',
                        dataLabels: {
                        enabled: false
                        }
                    }
                },
                xAxis:{
                    categories: ['1995', '1996', '1997', '1998', '1999'],
                    title: {
                        text: "Tahun"
                    }
                },
                yAxis:{
                    title: {
                        text: "Jumlah Penduduk"
                    }
                },
                series: [
                    {
                        name: "Pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "Wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            chartAreaOptions: {
                chart:{
                    type: 'area',
                    backrgoundColor: 'transparent',
                },
                credits: { //logo highcjhart
                    enabled: false
                },
                title: {
                    text: "Statistik Penduduk Lombok"
                },
                subtitle: {
                    text: "Data Penduduk Lombok tahun 1995 - 2000"
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                tooltip: { // kalau hover di point, keluar keterangan
                    enabled: true, // bawaan emang true
                    /* formatter: function() {
                        return `<b>Tahun ${this.x}</b> 
                        <br/> 
                        <p>Jumlah penduduk ${this.series.name} : ${this.point.y}</p>`
                    }, */
                    // pilih 1 antara pake format atau formatter, ga bisa dua-duanya
                // format: 'Tahun {x} <br> jumlah penduduk {point.y}'
                    // shared: true, // biar yang ke-hover pria dan wanita sekaligus
                    split: true,
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
                    spline: {
                        dataLabels: {
                        enabled: false
                        }
                    }
                },
                xAxis:{
                    categories: ['1995', '1996', '1997', '1998', '1999'],
                    title: {
                        text: "Tahun"
                    }
                },
                yAxis:{
                    title: {
                        text: "Jumlah Penduduk"
                    }
                },
                series: [
                    {
                        name: "Pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "Wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            chartBarOptions: {
                chart:{
                    type: 'bar',
                    backrgoundColor: 'transparent',
                },
                credits: { //logo highcjhart
                    enabled: false
                },
                title: {
                    text: "Statistik Penduduk Lombok"
                },
                subtitle: {
                    text: "Data Penduduk Lombok tahun 1995 - 2000"
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                tooltip: { // kalau hover di point, keluar keterangan
                    enabled: true, // bawaan emang true
                    shared: true, 
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
                    bar: {
                        dataLabels: {
                        enabled: false
                        }
                    }
                },
                xAxis:{
                    categories: ['1995', '1996', '1997', '1998', '1999'],
                    title: {
                        text: "Tahun"
                    }
                },
                yAxis:{
                    title: {
                        text: "Jumlah Penduduk"
                    }
                },
                series: [
                    {
                        name: "Pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "Wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            pieChartOptions: {
                chart:{
                    type: 'pie',
                    backrgoundColor: 'transparent',
                },
                credits: { //logo highcjhart
                    enabled: false
                },
                title: {
                    text: "Perbandingan Pria dan Wanita"
                },
                subtitle: {
                    text: "Perbandingan Pria dan Wanita di Lombok"
                },
                plotOptions: {
                    pie: {
                        innerSize: "30%", // ngasih bolongan di tengahnya (jadi donat)
                        allowPointSelect: true, // terpisah saat diklik
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            format: '{point.name} : {point.y}'
                        }
                    }
                },
                series: [
                    {
                        name: "Jumlah :",
                        data: [
                            {
                                name: "Pria",
                                y: 353553
                            },
                            {
                                name: "Wanita",
                                y: 403553
                            },
                        ]
                
                    }
                ]
                
            }
        }
    },
};
definePageMeta({
  layout:'forchart'
});
</script>
