<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>

  <RouterView></RouterView>

  <header>
    <div class="wrapper">
      <Random random="This works" />
    </div>
  </header>

  <main>
    <SecondRandom msg="Wowww" />

  </main>
</template>

<script setup lang="ts">
import Random from './components/Random.vue'
import SecondRandom from './components/SecondRandom.vue';
</script>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
