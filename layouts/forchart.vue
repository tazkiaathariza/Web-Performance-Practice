<template>
  <nav class="bg-gray-700 px-6 py-5 flex items-center justify-between font-poppins">
        <a class="text-white text-lg font-semibold" href="/chart">
            <span>BTJ Chart</span>
        </a>
        <div class="flex items-center space-x-4">
            <a href="/chart" class="text-white hover:text-gray-400">Basic</a>
            <a href="/chart/advance" class="text-white hover:text-gray-400">Advance</a>
            <a href="/chart/posttest" class="text-white hover:text-gray-400">Post Test</a>
        </div>
    </nav>

    <div class="py-5 px-6 font-poppins">
        <slot></slot>
    </div>
</template>