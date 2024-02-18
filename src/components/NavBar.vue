<template>
  <div class="p-4 bg-stone-800 text-stone-100">
    <Disclosure v-slot="{ open }">
      <DisclosureButton>
        <Bars2Icon
          :class="open ? 'transition duration-200 ease-out scale-y-0 transform' : 'transition delay-100 duration-200 ease-out scale-y-1 transform'"
          class="h-8 left-2 top-2 absolute" />
        <XMarkIcon class="h-8 left-2 top-2 absolute"
          :class="open ? 'transition delay-100 duration-200 ease-out scale-y-1 transform' : 'transition duration-200 ease-out scale-y-0 transform'" />
      </DisclosureButton>
      <Transition enter-active-class="transition duration-300 ease-in-out" enter-from-class="transform -translate-x-full"
        enter-to-class="transform translate-x-0" leave-active-class="transition duration-200 ease-in-out"
        leave-from-class="transform -translate-x-0" leave-to-class="transform -translate-x-full">
        <DisclosurePanel class="overflow-visible bg-stone-800 absolute w-3/4 h-screen left-0 shadow-xl shadow-black z-50">
          <ul>
            <li :key="link.name" v-for="link in links" class="p-4">
              <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
          </ul>


        </DisclosurePanel>
      </Transition>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
// imports
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars2Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const links = [{ name: 'Home', path: '/' }, { name: 'CV', path: '/ceevee' }, { name: 'Test', path: '/test' }]

</script>