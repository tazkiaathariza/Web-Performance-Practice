<template>
  <nav class="bg-gray-100 px-6 py-5 flex items-center justify-between font-poppins shadow-md">
    <NuxtLink class="text-teal-800 text-lg font-semibold" href="/">
        <span>BTJ Academy</span>
    </NuxtLink>
        <div class="flex items-center space-x-6">
            <NuxtLink to="/anime" :class="{ 'active': isActive('/anime') }" class="text-teal-800 hover:text-gray-400">
             Anime
            </NuxtLink>
            <NuxtLink to="/manga" :class="{ 'active': isActive('/manga') }" class="text-teal-800 hover:text-gray-400">
             Manga
            </NuxtLink>
        </div>
    </nav>

    <div class="py-5 px-6 font-poppins">
        <slot></slot>
    </div>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
  border-top: 3px solid teal
}
</style>