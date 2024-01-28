<template>
  <nav class="bg-gray-700 px-6 py-5 flex items-center justify-between">
        <div class="text-white text-lg font-semibold">
            <span>BTJ Academy</span>
        </div>
        <div class="flex items-center space-x-4">
            <a href="/anime" class="text-white hover:text-gray-400">Anime</a>
            <a href="/manga" class="text-white hover:text-gray-400">Manga</a>
        </div>
    </nav>

    <div class="py-5 px-6">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>