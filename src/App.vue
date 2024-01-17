<script setup lang="ts">
import Random from './components/Random.vue'
import SecondRandom from './components/SecondRandom.vue';
import Counter from './components/CounterComponent.vue';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>

  <RouterView></RouterView>

  <header>
    <div class="wrapper">
      <Random random="This works" />
    </div>
  </header>

  <main>
    <SecondRandom msg="Wowww" />
    <Counter />
  </main>
</template>

<style scoped></style>
