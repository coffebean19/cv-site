<template>
  <!-- <LandingModal v-if="intro" /> -->
  <NavBar class="sticky top-0 w-screen" />

  <RouterView></RouterView>
</template>

<script setup lang="ts">
// imports
import { ref, onMounted, onUnmounted } from "vue";
import LandingModal from "@/modals/LandingModal.vue"
import NavBar from "./components/NavBar.vue";

//Landing page
const intro = ref(true);

function landed() {
  intro.value = false;
}
</script>

<style scoped></style>
