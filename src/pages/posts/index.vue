<script setup lang="ts">
import BlogItem from '~/components/blog/BlogItem.vue';
import MainHeader from '~/components/header/MainHeader.vue';
import { useBlogStore } from '~/stores/blog';
import { computed, ref } from 'vue';
const store = useBlogStore();
const blogs = computed(() => {
    return store.blogsData;
})
</script>

<template>
    <MainHeader></MainHeader>
    <div dir="rtl" class="container max-w-[580px] w-full mx-auto">
        <template v-for="blogItem in blogs" :key="blogItem.id">
            <BlogItem :blog="blogItem" />
        </template>
    </div>
</template>
