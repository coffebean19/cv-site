<template>
  <i class="cloud"></i>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  pxPs: number,
  top: number,
  direction: string
}>();

const screenWidth = ref(screen.width)

function timeToCross(pxPs: number): string {
  return (screenWidth.value / pxPs).toString() + 's';
}

function fromTop(top: number): string {
  return top + '%';
}

function cloudDirection(direction: string) {
  return direction;
}

// function windowResize() {
// screenWidth.value = screen.width;
// }

// onMounted(() => {
// window.addEventListener('resize', windowResize);
// });

// onUnmounted(() => {
// window.removeEventListener('resize', windowResize);
// })

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
  width: 3em;
  animation: move v-bind(timeToCross(pxPs)) linear v-bind(cloudDirection(direction)) infinite;
  /* animation-delay: 2s; */
  z-index: 200;
  top: v-bind(fromTop(top));
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


@keyframes move {
  0% {
    left: 0%;
    opacity: 0%;
  }

  5% {
    opacity: 0%;
  }

  10% {
    /* left: 10%; */
    opacity: 95%;
  }

  90% {
    opacity: 95%;
  }

  95% {
    /* left: 95%; */
    opacity: 0%;
  }

  100% {
    left: 100%;
    opacity: 0%;
  }
}
</style>