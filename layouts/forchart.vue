<template>
  <nav class="bg-gray-100 px-6 py-5 flex items-center justify-between font-poppins shadow-md">
    <NuxtLink class="text-teal-800 text-lg font-semibold" to="/">
        <span>BTJ Academy</span>
    </NuxtLink>
    <div class="flex items-center space-x-6">
        <NuxtLink to="/chart" :class="{ 'active': isActive('/chart') }" class="text-teal-800 hover:text-gray-400">
         Basic
        </NuxtLink>
        <NuxtLink to="/chart/advance" :class="{ 'active': isActive('/chart/advance') }" class="text-teal-800 hover:text-gray-400">
         Advance
        </NuxtLink>
        <NuxtLink to="/chart/posttest" :class="{ 'active': isActive('/chart/posttest') }" class="text-teal-800 hover:text-gray-400">
         Post Test
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