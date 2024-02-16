<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const store = useBlogStore();
const blog = ref(store.getBlog(id));
if (!blog.value) {
    router.push("/404")
}
</script>

<template>
    <div dir="rtl" class="relative font-vazirmatn">
        <div class="z-50 container max-w-[760px] bg-bg-color-2 pb-12 sm:px-6 px-3 pt-10 w-full mx-auto">
            <div class="z-50 relative rounded-[16px] overflow-hidden">
                <img class="w-full blog-main-image h-auto aspect-[16/9] flex justify-center text-white object-cover"
                    :src="blog?.imageURL" :alt="blog?.imageAlt">
            </div>

            <div class="mt-4 p-2">
                <h1 class="mb-4 text-3xl font-extrabold">
                    {{ blog?.title }}
                </h1>
                <div v-for="categoryItem in blog?.categories" :key="categoryItem.id" class="mb-3">
                    <RouterLink to=""
                        :style="{ background: `-webkit-linear-gradient(315deg, ${categoryItem.color[0]} 25%, ${categoryItem.color[1]})` }"
                        class="font-semibold text-sm category">
                        {{ categoryItem.title }}
                    </RouterLink>
                </div>
                <div class="blog-content text-base text-justify font-vazirmatn font-normal" v-html="blog?.body">
                </div>
            </div>
            <div class="absolute top-0 right-0 left-0 w-full max-h-[240px] h-auto aspect-[16/5]"
                :style="{ background: `${blog?.blogColor}` }">
            </div>
        </div>
    </div>
</template>

<style scoped>
.category {
    background-clip: border-box;
    background-clip: text !important;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>