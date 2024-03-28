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

const classObject = computed(() => {
  const theme = settings.value.theme
  return [theme, settings.value.dir == 'rtl' ? 'rtl' : 'ltr']
})
</script>

<template>
  <NuxtPage :class="classObject" />
</template>
