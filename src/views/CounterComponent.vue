<template>
  <button @click="incrementCount">
    Count is: {{ counter.count }}
  </button>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue';

const counter = reactive({
  count: 0,
  title: "This is a title"
})

const incrementCount = () => {
  counter.count += 1;
}
</script>
  
<style scoped>
button {
  font-weight: bold;
}
</style>
  