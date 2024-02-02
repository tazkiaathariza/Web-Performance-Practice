<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-4 text-center">Judul Halaman</h1>
    <h2 class="text-lg text-gray-600 mb-8 text-center">Subtitle di Tengah Halaman</h2>

    <div class="grid lg:grid-cols-2">
       <div class="p-5 border rounded-md mb-4 ml-2 hover:border-teal-500 hover:shadow-md">
            <h2 class="text-lg font-semibold mb-5 ">Explore your Manga</h2>
            <p class="text-md font-reguler mb-3">Anime from web dev</p>
            <NuxtLink href="/anime" class=" mb-5 mr-3 py-2 px-4 bg-teal-800 border text-white rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">Go to Anime Section ></NuxtLink>
            <p class="text-md font-reguler mt-5 mb-3">Manga from web dev</p>
            <NuxtLink href="/manga" class="mb-5 mr-3 py-2 px-4 bg-teal-800 border text-white rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">Go to Manga Section ></NuxtLink>
        </div>
    </div>

    
  </div>


</template>

<script>
export default {

}
</script>

<style>

</style>