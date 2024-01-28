<template>
     <div class="border rounded p-4 bg-white min-h-[400px] max-h-[400px]" width="500">
        <!-- Konten Card -->
        <NuxtImg :alt="anime.title" :src="anime.images.webp.image_url" class="border rounded max-h-[250px]" width="300"/>
        <h2 class="text-md font-bold leading-loose mb-1">{{ truncateTitle(anime.title) }}</h2>
        <p class="text-md font-normal mb-3">{{ truncateBackground(anime.synopsis) }}</p>
        <NuxtLink :to="{ path: `/manga/${anime.mal_id}` }" class="text-blue-500">Read More ></NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        anime: {
            type: Object,
            required: true,
        }
    },
    methods: {
        truncateTitle(title) {
            if (title.length > 25) {
                return title.substring(0, 20) + '...';
            }
        return title;
        },
        truncateBackground(synopsis) {
            if (synopsis.length > 50) {
                return synopsis.substring(0, 35) + '...';
            }
        return synopsis;
        }
    }
}
</script>

<style>

</style>