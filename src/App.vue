<template>
  <LandingModal v-if="intro" />
  <div v-if="!intro">
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
import { ref, onMounted, onUnmounted } from "vue";
import LandingModal from "@/modals/LandingModal.vue"

//Landing page
const intro = ref(true);

function landed() {
  intro.value = false;
}


//test
const color = ref("blue");

function changeColor() {
  if (color.value === "blue") {
    color.value = "red";
  } else {
    color.value = "blue";
  }
}

const screenWidth = ref(screen.width)

function timeToCross(pxPs: number): string {
  return (screenWidth.value / pxPs).toString() + 's';
}

function windowResize() {
  screenWidth.value = screen.width;
}

onMounted(() => {
  window.addEventListener('resize', windowResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', windowResize);
})

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
  transition: 0.5s;
}

.intro {
  transition: 0.333s;
  padding: 15px;
  width: 33vw;
}


.test {
  width: 20px;
  height: 20px;
  background-color: v-bind(color);
  position: absolute;
  z-index: 200;
}
</style>
