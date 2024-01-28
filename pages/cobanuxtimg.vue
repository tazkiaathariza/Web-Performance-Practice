<template>
    <div class="judul">BTJ Academy</div>

    <div class="part">
    <div v-once>Contoh v-once</div>

        <div>Data 1</div>
        <button class="btn btn-primary" @click="count++">Tambah</button>
        <div>Hasil = {{ count }}</div>

        <div>Data 1</div>
        <button class="btn btn-primary" @click="count2++">Tambah</button>
        <div>Hasil = {{ count2 }}</div>

        <div v-memo="[count, count2]"> Perkalian data 1 dan 2 = {{ count * count2}}</div>
    </div>
    
    <div class="part">
        <div>Contoh Lazy</div>
        <button class="btn btn-primary" @click="showCard = !showCard">Show Card</button>
        <LazyUserCard v-if="showCard"/>
    </div>

    <div class="part">
      <img width="200" src="public/sunflower.jpg"/>
    </div>

    <div class="part">
      <NuxtImg width="200" format="avif" src="sunflower.jpg" />
    </div>

    <div class="part">
      <NuxtImg preset="presetOne" src="sunflower.jpg" />
    </div>

    <div class="part">
      <NuxtImg width="200" src="https://cdn.myanimelist.net/images/anime/1015/138006.jpg" />
    </div>

</template>

<script>
export default{
  data() {
      return {
          showCard: false,
          count: 0,
          count2: 10,
      }
  }
};

</script>



<style scoped>

div {
  font-family: Arial, Helvetica, sans-serif;
};

.judul {
    color: black
}

.part{
  margin: 20px
}
</style>