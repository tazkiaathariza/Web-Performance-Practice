<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-4 text-center">Judul Halaman</h1>
    <h2 class="text-lg text-gray-600 mb-8 text-center">Subtitle di Tengah Halaman</h2>

    <div class="flex space-x-4">
 
        <NuxtLink href="/anime" class="py-2 px-4 bg-white border border-blue-700 text-blue-700 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white">Go to Anime Section ></NuxtLink>

      
        <NuxtLink href="/manga" class="py-2 px-4 bg-white border border-blue-700 text-blue-700 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white">Go to Manga Section ></NuxtLink>

    </div>

    <div class="flex-grow bg-gray-100 mt-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        <div class="h-16 bg-blue-500 rounded"></div>
        <div class="h-16 bg-green-500 rounded"></div>
        <div class="h-16 bg-yellow-500 rounded"></div>
        <div class="h-16 bg-red-500 rounded"></div>
        <div class="h-16 bg-purple-500 rounded"></div>
        <div class="h-16 bg-pink-500 rounded"></div>
      </div>
    </div>
  </div>

<div class="flex flex-wrap mx-auto max-w-screen-lg mb-4">
  <!-- Kolom 1 -->
  <div class="flex-1 py-4 mb-4 mr-2"> <!-- Tambahkan mr-2 untuk margin kanan -->
    <h1>Welcome to </h1>
    <div class="p-4 border rounded">
      <h2 class="text-lg font-semibold mb-4">Explore your Anime</h2>
      
    </div>
  </div>

  <!-- Kolom 2 -->
  <div class="flex-1 p-4 border rounded mb-4 ml-2"> <!-- Tambahkan ml-2 untuk margin kiri -->
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-4">Explore your Manga</h2>
     
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