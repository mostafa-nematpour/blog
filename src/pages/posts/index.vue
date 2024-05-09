<script setup lang="ts">
import { computed } from 'vue'
import { useBlogStore } from '~/stores/blog'
import BlogItem from '~/components/blog/BlogItem.vue'
import FixedHeader from '~/components/header/FixedHeader.vue'
const store = useBlogStore()
const blogs = computed(() => {
  return store.blogsData
})
useSeoMeta({
  title: "نوشته‌ها",
  ogTitle: "نوشته‌ها",
  // description: blog.value?.description,
  // ogDescription: blog.value?.description,
  // ogImage: blog.value?.imageURL
  // twitterCard: 'summary_large_image'
})
</script>

<template>
  <FixedHeader>
    <h1 class="text-center font-medium text-3xl text-c-text-3">نوشته‌ها</h1>
  </FixedHeader>
  <div dir="rtl" class="container max-w-[36.25rem] w-full mx-auto pt-[56px]">
    <template v-for="blogItem in blogs" :key="blogItem.id">
      <BlogItem :blog="blogItem" />
    </template>
  </div>
</template>
