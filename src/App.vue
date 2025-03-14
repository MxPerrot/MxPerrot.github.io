<!-- App.vue -->
<script setup>
import Navbar from './components/Navbar.vue';
import Timeline from './components/Timeline.vue';
import Section from './components/Section.vue';
import { t } from './i18n';
</script>

<template>
  <Navbar />
  <Section :title="t('section_journey')">
    <Timeline />
  </Section>
</template>
