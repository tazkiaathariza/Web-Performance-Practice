<template>
     <div class="border rounded p-4 bg-gray-50 min-h-[400px] max-h-[400px] shadow-sm
     hover:border-teal-500 hover:border-1 hover:shadow-md transition duration-300 ease-in-out" width="500">
        <!-- Konten Card -->
        <NuxtImg :alt="anime.title" :src="anime.images.webp.image_url" class="border rounded max-h-[250px]" width="300"/>
        <h2 class="text-md font-bold leading-loose mb-1">{{ truncateTitle(anime.title) }}</h2>
        <p class="text-md font-normal mb-3">{{ truncateBackground(anime.synopsis) }}</p>
        <NuxtLink :to="{ path: `/manga/${anime.mal_id}` }" class="text-teal-500">Read More &#8594;</NuxtLink>
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
            if (title.length > 18) {
                return title.substring(0, 16) + '...';
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