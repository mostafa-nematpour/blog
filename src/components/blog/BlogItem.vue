<script setup lang="ts">
defineProps(['blog'])

const blogLink = (id: Number, slug: String) => {
    return `/blogs/${id}/${slug}`
}

</script>

<template>
    <article class="group/item blog-item font-vazirmatn py-4 px-6 border-top rounded-b-[10px]">
        <RouterLink :to="blogLink(blog.id, blog.slug)" :title="blog.title"
            class="overflow-hidden block w-full rounded-[6px] mb-4">
            <img class="w-full h-auto ease-out duration-300 group-hover/item:scale-[103%]" :src="blog.imageURL" alt="">
        </RouterLink>
        <div v-for="categoryItem in blog.categories" :key="categoryItem.id" class="mb-1">
            <RouterLink to=""
                :style="{ background: `-webkit-linear-gradient(315deg, ${categoryItem.color[0]} 25%, ${categoryItem.color[1]})` }"
                class="font-semibold text-sm category">
                {{ categoryItem.title }}
            </RouterLink>
        </div>
        <RouterLink :to="blogLink(blog.id, blog.slug)" :title="blog.title" class="mb-3 block">
            <h2 class="text-xl font-semibold ">{{ blog.title }}</h2>
        </RouterLink>
        <p class="font-normal text-text-color-2 line-clamp-3">
            {{ blog.description }}
        </p>
        <div>
            <span></span>
            <time datetime=""></time>
        </div>
    </article>
</template>


<style scoped>
.category {
    background-clip: border-box;
    background-clip: text !important;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.border-top {
    border-top: 1px solid #d0d7de !important;
}
</style>