<template>
    <nav class="flex items-center justify-between">
        <div class="text-grey text-xl font-semibold">
            <span class="text-teal-800">{{ title }}</span>
        </div>
        <div class="flex items-center space-x-4">
           <input type="text" placeholder="Search..." class="border rounded-md py-1 px-2 focus:border-teal-500">
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Page Title"
        }
    }
}
</script>