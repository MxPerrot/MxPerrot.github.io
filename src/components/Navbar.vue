<script setup>
import { ref, computed } from 'vue';
import ThemeController from './ThemeController.vue';
import LanguageToggle from './LanguageToggle.vue';
import { t } from '../i18n';

const isOpen = ref(false);

const links = computed(() => [
  { name: t('section_journey'), href: '#parcours' },
  { name: t('section_projects'), href: '#projets' },
  { name: t('section_skills'), href: '#competences' },
  { name: t('section_contact'), href: '#contact' }
]);
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow dark:bg-gray-800">
    <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <a href="#" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
          Portfolio
        </a>

        <div class="flex lg:hidden">
          <button @click="isOpen = !isOpen" type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div :class="{ 'translate-x-0 opacity-100': isOpen, 'opacity-0 -translate-x-full': !isOpen }"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
          <a v-for="(link, index) in links" :key="index"
            class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            :href="link.href">{{ link.name }}</a>
        </div>

        <ThemeController />
        <LanguageToggle />
      </div>
    </div>
  </nav>
</template>
