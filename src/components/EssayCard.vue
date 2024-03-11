<template>
  <main>
    <h1>{{ header }}</h1>
    <p>{{ description }}</p>
  </main>
</template>

<script setup lang="ts">

  const props = defineProps<{
    header: string,
    description: string
  }>();
</script>