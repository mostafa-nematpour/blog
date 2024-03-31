<script setup lang="ts">
onMounted(() => {
  if (process.client) {
    const settings = useSiteSetting()
  }
  window.addEventListener('storage', function (event) {
    if (event.key === 'site-theme') {
      // Handle the change in site theme
      const newTheme = event.newValue
      console.log('Site theme has changed to:', newTheme)
      // Add your logic here to update the UI or perform other actions
    }
  })
})

// provide('siteSettings', settings)

// const classObject = computed(() => {
//   const theme = settings.value.theme
//   return [theme, settings.value.dir == 'rtl' ? 'rtl' : 'ltr']
// })
</script>

<template>
  <div class="bg-c-bg">
    <NuxtPage />
  </div>
</template>
