<script setup lang="ts">
import { computed } from 'vue'
import { useBlogStore } from '~/stores/blog'
import BlogItem from '~/components/blog/BlogItem.vue'
import FixedHeader from '~/components/header/FixedHeader.vue'
const store = useBlogStore()
const blogs = computed(() => {
  return store.blogsData
})
</script>

<template>
  <FixedHeader></FixedHeader>
  <div dir="rtl" class="container max-w-[580px] w-full mx-auto pt-[56px]">
    <template v-for="blogItem in blogs" :key="blogItem.id">
      <BlogItem :blog="blogItem" />
    </template>
  </div>
</template>
