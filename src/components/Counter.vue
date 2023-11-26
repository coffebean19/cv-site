<script setup lang="ts">
    defineProps<{
        count: number
    }>()
</script>

<template>
    <button @click="count++">
        Count is: {{ count }}
    </button>
</template>