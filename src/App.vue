<script setup lang="ts">
const settings = useCookie('siteSettings', {
  default: () => ({
    theme: 'dark',
    lang: 'fa',
    dir: 'rtl'
  }),
  maxAge: 100_000_000,
  sameSite: 'lax'
})

provide('siteSettings', settings)

const classObject = computed(() => {
  const theme = settings.value.theme
  return [theme, settings.value.dir == 'rtl' ? 'rtl' : 'ltr']
})
</script>

<template>
  <div :class="classObject" class="bg-c-bg">
    <NuxtPage />
  </div>
</template>
