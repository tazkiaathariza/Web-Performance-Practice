<template>
    <TitleAndSearch title="Manga List"/>
    <div class="max-w-screen-lg mx-auto py-4">
    <div class="flex flex-wrap -mx-4">
      <div v-for="(item, index) in items" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
        <MangaCard :anime="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    mounted(){
        this.fetchAnimeList()
    },
    methods: {
        async fetchAnimeList(){
            const resp = await fetch('https://api.jikan.moe/v4/manga');
            const body = await resp.json();
            this.items = body.data;
            console.log(body);
        },
    }
}
</script>