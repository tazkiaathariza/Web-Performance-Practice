<template>
  <nav class="bg-teal-800 px-6 py-5 flex items-center justify-between font-poppins">
        <a class="text-white text-lg font-semibold" href="/">
            <span>BTJ Academy</span>
        </a>
        <div class="flex items-center space-x-6">
            <a href="/anime" class="text-white hover:text-gray-400">Anime</a>
            <a href="/manga" class="text-white hover:text-gray-400">Manga</a>
        </div>
    </nav>

    <div class="py-5 px-6 font-poppins">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>