<template>
  <!-- <LandingModal v-if="intro" /> -->
  <NavBar class="sticky top-0 w-screen z-50" />

  <RouterView></RouterView>
</template>

<script setup lang="ts">
// imports
import NavBar from "./components/layout/NavBar.vue";
</script>

<style scoped></style>
