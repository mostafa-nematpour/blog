<script setup>
import ToggleTheme from '../ui/button/ToggleTheme.vue'
const siteSettings = inject('siteSettings')
</script>

<template>
  <div>
    <ToggleTheme v-model="siteSettings.theme"></ToggleTheme>
  </div>
</template>

<style scoped></style>
