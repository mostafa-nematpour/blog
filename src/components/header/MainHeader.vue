<script setup lang="ts">
import ToggleTheme from '../ui/button/ToggleTheme.vue'
import { useAppearance } from '~/composables/theme'

let siteTheme: globalThis.Ref<string | null> | null = null
let toggleTheme = () => {}

onMounted(() => {
  const { theme, isDark, toggle } = useAppearance()
  toggleTheme = toggle
  siteTheme = theme
})

</script>

<template>
  <div>
    <ToggleTheme @on-toggled="toggleTheme()" v-model="siteTheme"></ToggleTheme>
  </div>
</template>

<style scoped></style>
