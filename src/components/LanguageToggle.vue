<!-- LanguageToggle.vue -->
<script setup>
import { defineEmits } from 'vue';
import { language, setLanguage } from '../i18n';

const emit = defineEmits(['language-changed']);

const toggleLanguage = () => {
  const newLang = language.value === 'en' ? 'fr' : 'en';
  setLanguage(newLang);
  emit('language-changed', newLang);
};
</script>

<template>
  <!-- In the template, Vue automatically unwraps refs so you can use `language` directly -->
  <button @click="toggleLanguage" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition text-4xl leading-none">
    {{ language === 'fr' ? '🇫🇷' : '🇬🇧' }}
  </button>
</template>
