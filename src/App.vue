<template>
  <div v-if="landing" class="landing">
    <h1>This is the intro page. Or something</h1>
    <button class="button-6" @click="landed">Enter</button>
  </div>
  <div v-if="!landing">
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
  </div>
</template>

<script setup lang="ts">
import Random from './views/Random.vue'
import SecondRandom from './views/SecondRandom.vue';
import { reactive, ref } from "vue";

//Landing page
const landing = ref(true);

function landed() {
  landing.value = false;
}

</script>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.landing {
  width: 100vw;
  height: 100vh;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: block;
  padding: 33vh 0 0 33vw;
  top: 0;
  left: 0;
  background: rgb(255, 62, 0);
  background: linear-gradient(0deg, rgba(255, 62, 0, 1) 0%, rgba(175, 27, 103, 1) 15%, rgba(73, 24, 132, 1) 58%, rgba(2, 7, 67, 1) 100%);
}
</style>
