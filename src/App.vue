<script setup lang="ts">
import Random from './components/Random.vue'
import SecondRandom from './components/SecondRandom.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <Random random="This works" />
    </div>
  </header>

  <main>
    <SecondRandom msg="Jou nai" />
  </main>
</template>

<style scoped>

</style>
