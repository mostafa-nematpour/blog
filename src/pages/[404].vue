<script setup lang="ts">
useSeoMeta({
  title: '404 - متاسفانه صفحه مورد نظر شما پیدا نشد',
  ogTitle: '404 - متاسفانه صفحه مورد نظر شما پیدا نشد',
  description: '',
  ogDescription: '',
  ogImage: ''
})
</script>
<template>
  <div
    dir="rtl"
    class="text-c-text container max-w-[760px] pb-12 page404 px-6 pt-10 w-full mx-auto"
  >
    <h1 class="px-3 font-sahel py-12">404 - متاسفانه صفحه مورد نظر شما پیدا نشد.</h1>
    <RouterLink to="/posts" class="text-c-text-3"> نوشته‌ها </RouterLink>
  </div>
</template>

<style scoped>
.page404 {
  min-height: 100vh;
}
</style>
