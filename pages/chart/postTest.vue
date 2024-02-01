<template>
    <div class="items-center justify-between text-center my-2">
        <h1 class="text-2xl font-bold">Post Test Data Visualization - Day 2</h1>
        <p class="mt-2">by Tazkia Athariza Dhivara</p>
    </div>
 <div class="flex my-1 mx-auto p-5 items-center justify-between lg:mx-24">
   <div class="my-5 mx-5">
        <p class="text-teal-800 mb-2">✓ Multiple Chart: Bar and Pie</p>
        <highchart 
        :options="chartOptions"   
        :modules="['exporting', 'export-data']"
        class="p-5 bg-gray-50 border rounded-2xl hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out"
        />
        </div>
    </div>
        
</template>

<script>
definePageMeta({ 
  layout: 'forchart',
});

export default {
  data() {
    return {
      items: [],
      chartOptions: {
        chart: {
         // type: 'bar',
          width: 920, // Atur lebar chart sesuai kebutuhan
          height: 900, 
          backgroundColor: 'transparent',
        },
        title: {
          text: "Statistik Penduduk Indonesia pada Tahun 2023",
          align: 'left',
        },
        subtitle: {
          text: "Data Penduduk Indonesia pada Tahun 2023 Berdasarkan Provinsi",
          align: 'left',
        },
        xAxis: {
            title: {
                text: 'PROVINSI',
            },
            categories: [],
        },
        yAxis: {
          title: {
            text: 'JUMLAH PENDUDUK (jiwa)',
          },
        },
        series: [
          {
            name: 'Jumlah Penduduk per Provinsi',
            type: 'bar',
            data: [],
            tooltip: {
              headerFormat: '<b>Provinsi: {point.x}</b><br/>',
              pointFormat: 'Jumlah penduduk: <b>{point.y} jiwa</b><br/>',
            },
          },
          {
            name: 'Total',
            type: 'pie',
            size: '200',
            center: [550, 20],
            innerSize: '20%',
            data: [],
            tooltip: {
              pointFormat: '<b><point.name></b>Jumlah penduduk: <b>{point.y} </b> jiwa',
            },
          },
        ],
        /* 
        tooltip: { 
          enabled: true, 
          shared: true, 
          formatter: function(){
          console.log(this.points);
            return [`Provinsi: <b>${this.x}</b><br/>`].concat(
                  this.points ? this.points.map(point => {
                  return `Jumlah penduduk: <b>${point.y}</b> jiwa<br/>`
                }) : []
                )
              },
        }, */
         plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              distance: -50,
              format: '{point.name}',
            },
          },
        },
      },
    };
  },
  mounted() {
    this.fetchPeopleDataList();
  },
  methods: {
    hurufKapital(str) { // huruf kapital untuk provinsi
      return str.split(' ').map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
    },
    async fetchPeopleDataList() {
      const resp = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2023');
      const body = await resp.json();
      this.items = body.data;
      console.log(body);
      
      // Masukan data dari API ke xAxis
      this.chartOptions.xAxis.categories = this.items.map(entry => this.hurufKapital(entry.prov));
      console.log("ini xAxis", this.chartOptions.xAxis.categories);
      // Masukan data dari API ke series
      this.chartOptions.series[0].data = this.items.map(entry => parseFloat(entry.jumlah_penduduk)); // ubah string ke angka
      console.log("ini series", this.chartOptions.series[0].data);

      // data untuk pie chart
      this.chartOptions.series[1].data = this.items.map(entry => ({
        name: entry.prov,
        y: parseInt(entry.jumlah_penduduk, 10),
      }));
    },
 
  },
};
</script>