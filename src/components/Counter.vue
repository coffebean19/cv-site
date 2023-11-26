<script setup lang="ts">
    defineProps <{
        count: Number
    }>()
</script>

<template>
    <button @click="count++">
        Count is: {{ count }}
    </button>
</template>

<style scoped>
    button {
        font-weight: bold;
    }
</style>