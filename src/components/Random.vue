<script setup lang="ts">
    defineProps<{
        random: string
    }>()
</script>

<template>
    <h1>{{ random }}</h1>
</template>