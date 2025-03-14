<template>
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-500 dark:text-gray-200 text-center">{{ title }}</h2>
        <div class="w-full h-[1px] bg-gray-400 mx-auto my-2"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
props: {
    title: {
    type: String,
    required: true
    }
}
};
</script>

<style scoped>
/* Additional styling if needed */
</style>