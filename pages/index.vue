<template>
  <div class="bg-gradient-to-r from-teal-500 to-teal-600 p-2 font-poppins">
  <div class="flex flex-col items-center justify-center min-h-screen bg-white border rounded-[25px] my-5 mx-10">
    <h1 class="text-4xl font-bold mb-3 text-center">BTJ Academy Task</h1>
    <h2 class="text-lg text-gray-600 mb-5 text-center">Tazkia Athariza Dhivara</h2>
      <!-- Card 1 -->
       <div class="w-full bg-gray-50 p-5 border rounded-md mb-4 ml-2 hover:border-teal-500 hover:shadow-md">
          <h2 class="text-lg font-semibold mb-4">&#128640; Data Visualization Class</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p class="text-md font-semibold">✓ Post Test</p>
              <p class="text-md font-reguler mb-3">API integration to highchart</p>
              <NuxtLink to="/chart/posttest" class=" w-full mb-5 mr-3 py-2 px-14 bg-teal-800 border text-white 
                rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">
                Post Test &#8594;
              </NuxtLink>
            </div>

            <div>
              <p class="text-md font-semibold">✓ Basic Chart</p>
              <p class="text-md font-reguler mb-3">Try several chart</p>
              <NuxtLink to="/chart" class="mb-5 mr-3 py-2 px-11 bg-teal-800 border text-white 
              rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">
              Basic Chart &#8594;</NuxtLink>
            </div>

            <div>
              <p class="text-md font-semibold">✓ Advance Chart</p>
              <p class="text-md font-reguler mb-3">Multiple axis and multiple chart</p>
              <NuxtLink to="/chart/advance" class="mb-5 mr-3 py-2 px-9 bg-teal-800 border text-white 
              rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">
              Advance Chart &#8594;</NuxtLink>
            </div>
          </div>
      </div>

      <!-- Card 2 -->
       <div class="w-full bg-gray-50 p-5 border rounded-md mb-4 ml-2 hover:border-teal-500 hover:shadow-md">
          <h2 class="text-lg font-semibold mb-3">&#128269; Web Performace Class</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p class="text-md font-semibold">✓ Anime</p>
              <p class="text-md font-reguler mb-3">Hit API and make dynamic route</p>
              <NuxtLink to="/anime" class=" w-full mb-5 mr-3 py-2 px-14 bg-teal-800 border text-white 
                rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">
                Anime Section &#8594;
              </NuxtLink>
            </div>

            <div>
              <p class="text-md font-semibold">✓ Manga</p>
              <p class="text-md font-reguler mb-3">Hit API and make dynamic routeg</p>
              <NuxtLink to="/manga" class="mb-5 mr-3 py-2 px-11 bg-teal-800 border text-white 
              rounded-md transition duration-300 hover:bg-teal-600 hover:text-white">
              Manga Section &#8594;</NuxtLink>
            </div>
          </div>
      </div> 
 

</template>

<script>
definePageMeta({
  layout:'home'
});
</script>

