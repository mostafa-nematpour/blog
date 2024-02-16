<script setup lang="ts">
import BlogItem from '@/components/blog/BlogItem.vue';
import { useBlogStore } from '@/stores/blog';
import { computed } from 'vue';
const store = useBlogStore();
const blogs = computed(() => {
    return store.blogsData;
})
</script>

<template>
    <div dir="rtl" class="container max-w-[640px] px-6 w-full mx-auto">
        <template v-for="blogItem in blogs" :key="blogItem.id">
            <BlogItem :blog="blogItem" />
        </template>
    </div>
</template>
