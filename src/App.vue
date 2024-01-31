<template>
  <div class="test">
    <button @click="changeColor">{{ screenWidth }}</button>
  </div>
  <div v-if="intro" :class="{ landing: intro }">
    <i class="cloud"></i>
    <i class="cloud"
      :style="{ animationDuration: `$(v-bind(timeToCross(12.5)))`, animationDirection: 'alternate-reverse', top: '40%', backgroundColor: 'red' }"></i>
    <i class="cloud" style="animation-duration: v-bind(timeToCross(13)); animation-direction: alternate; top: 45%"></i>
    <i class="cloud"
      style="animation-duration: v-bind(timeToCross(15)); animation-direction: alternate-reverse; top: 52%"></i>
    <i class="cloud" style="animation-duration: v-bind(timeToCross(20)); animation-direction: alternate; top: 55%"></i>
    <i class="cloud"
      style="animation-duration: v-bind(timeToCross(30)); animation-direction: alternate-reverse; top: 52%"></i>
    <div>
      <h1>This is the intro page. Or something</h1>
      <button class="button-6" @click="landed">Enter</button>
    </div>
  </div>
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

const screenWidth = ref(screen.width);

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

@keyframes move {
  0% {
    left: -2%;
  }

  10% {
    left: 10%
  }

  25% {
    left: 25%;
  }

  35% {
    left: 35%;
  }

  50% {
    left: 50%;
  }

  66% {
    left: 66%;
  }

  75% {
    left: 75%;
  }

  85% {
    left: 85%;
  }

  95% {
    left: 95%;
  }

  100% {
    left: 105%;
  }
}
</style>
