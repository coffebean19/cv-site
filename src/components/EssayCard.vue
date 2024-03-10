<template>
  <Disclosure>
    <DisclosureButton class="border border-slate-400 bg-stone-200 rounded p-2">{{ header }}</DisclosureButton>
    <DisclosurePanel class="border border-slate-400 bg-amber-200 rounded p-2">{{ text }}</DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'

  const props = defineProps<{
    header: string,
    text: string
  }>();
</script>