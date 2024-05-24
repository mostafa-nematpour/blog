<script setup lang="ts">
import ToggleTheme from '../ui/button/ToggleTheme.vue'
import { useAppearance } from '~/composables/theme'

let siteTheme: globalThis.Ref<string | null> | null = null
let toggleTheme = () => { }

onMounted(() => {
  const { theme, isDark, toggle } = useAppearance()
  toggleTheme = toggle
  siteTheme = theme
})
</script>

<template>
  <header class="backdrop-blur-md flex">
    <div class="flex text-c-text font-sahel h-[56px] w-full mx-auto max-w-[47.5rem]">
      <div class="flex-1 flex justify-start">
        <slot name="options"></slot>
      </div>
      <div class="flex-[3] flex items-center justify-center text-5xl">
        <slot></slot>
      </div>
      <div class="flex-1 flex items-center justify-end">
        <ToggleTheme class="me-3" @on-toggled="toggleTheme()" v-model="siteTheme"></ToggleTheme>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
