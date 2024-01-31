<template>
  <i class="cloud"></i>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
.cloud {
  background-color: #fff;
  background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, .1));
  border-radius: 1em;
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .5);
  display: inline-block;
  height: 1em;
  margin-left: -1.5em;
  position: absolute;
  top: 50%;
  width: 3em;
  animation: move 15s linear infinite;
  /* -webkit-filter: drop-shadow(0 2px 3px hsla(0, 0%, 0%, .25)); */
}

.cloud:after,
.cloud:before {
  background-color: #fff;
  content: '';
  border-radius: 100%;
  position: absolute;
}

.cloud::after {
  height: 1em;
  width: 1em;
  top: -0.5em;
  right: .4em;
  background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, .025));
}

.cloud:before {
  background-image: -webkit-linear-gradient(hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, .075));
  height: 1.6em;
  left: .4em;
  top: -.75em;
  width: 1.6em;
}
</style>