<template>
    <TitleAndSearch title="Anime List" @updateSearch="updateSearch"/>
    <div class="max-w-screen-lg mx-auto py-4">
    <div>
       <div v-if="isLoading" class="text-center item-center w-full">
        <p>Tunggu ya! Masih loading...</p>
        <div class="animasi"></div>
      </div>
      <div v-else>
        <div v-if="filteredItems.length > 0" class="flex flex-wrap -mx-4">
            <div v-for="(item, index) in filteredItems" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <AnimeCard :anime="item"/>
            </div>
        </div>
        <div v-else class="text-center w-full">
            <p>Ups! yang kamu cari tidak ada</p>
            <button @click="refreshList" class="bg-teal-500 py-1 px-2 text-white rounded my-2">Coba lihat semua list</button>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            filteredItems: [],
            searchQuery: "",
            isLoading: true
        }
    },
    mounted(){
        this.fetchAnimeList()
    },
    methods: {
        async fetchAnimeList() {
            try {
                const resp = await fetch('https://api.jikan.moe/v4/anime');
                const body = await resp.json();
                this.items = body.data || [];
                this.filteredItems = this.items; // Set data yang sudah difilter
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.isLoading = false; // Set isLoading menjadi false setelah selesai
            }
        },
        updateSearch(query) {
            if (query === "") {
                // pas user ga ngetik search, semua items keluar
                this.filteredItems = this.items;
            } else {
                // pas user mulai ngetik di input search, item tertentu saja yang muncul
                this.filteredItems = this.items.filter(item =>
                    item.title.toLowerCase().includes(query.toLowerCase())
                );
            }
        },
        refreshList() {
            location.reload();
        }   
    }
}
</script>

<style scoped>
    .animasi{
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid teal;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: donut-spin 1s linear infinite;
    margin: auto; 
    }

    @keyframes donut-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
</style>