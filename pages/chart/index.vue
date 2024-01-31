<template>
    <div class="grid grid-cols-2 bg-gray-100">
        <div class="bg-gray-100">
            <highchart 
            :options="chartOptions" 
            :modules="['exporting', 'export-data']"
            class="my-5 mx-3" />
        </div>

        <div class="bg-gray-100">
            <highchart :options="chartColumnOptions" 
            :modules="['exporting', 'export-data']" 
            class="my-5 mx-5" />
        </div>
    </div>

    <div class="grid grid-cols-2">
        <div class="bg-gray-100">
            <highchart :options="chartAreaOptions" 
            :modules="['exporting', 'export-data']"
            class="my-5 mx-3" />
        </div>

        <div class="bg-gray-100">
            <highchart :options="chartBarOptions" 
            :modules="['exporting', 'export-data']"
            class="my-5 mx-5" />
        </div>
    </div>

     <div class="grid grid-cols-2">
        <div class="bg-gray-100">
            <highchart :options="pieChartOptions"  class="my-5 mx-3" />
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
                        fontSize: '30px',
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
                        name: "pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            chartColumnOptions: {
                chart:{
                    type: 'column',
                    backrgoundColor: 'transparent'
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
                        name: "pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            chartAreaOptions: {
                chart:{
                    type: 'area',
                    backrgoundColor: 'transparent'
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
                        name: "pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            chartBarOptions: {
                chart:{
                    type: 'bar',
                    backrgoundColor: 'transparent'
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
                        name: "pria",
                        data: [827272, 927272, 627272, 557289, 677233]
                    },
                    {
                        name: "wanita",
                        data: [907272, 887272, 777272, 947277, 907299]
                    },
                ]
                
            },
            pieChartOptions: {
                chart:{
                    type: 'pie',
                    backrgoundColor: 'transparent'
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
                                name: "pria",
                                y: 353553
                            },
                            {
                                name: "wanita",
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
