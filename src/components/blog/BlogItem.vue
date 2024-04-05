<script setup lang="ts">
defineProps(['blog'])

const blogLink = (id: Number, slug: String) => {
  return `/posts/${id}/${slug}`
}
</script>

<template>
  <article class="group/item blog-item font-sahel py-5 px-6 border-top rounded-b-[10px]">
    <RouterLink
      :to="blogLink(blog.id, blog.slug)"
      :title="blog.title"
      class="overflow-hidden block w-full rounded-[6px] mb-4"
    >
      <img
        class="w-full h-auto ease-out aspect-[16/9] flex justify-center text-black object-cover duration-300 group-hover/item:scale-[103%]"
        :src="blog.imageURL"
        alt=""
      />
    </RouterLink>
    <div class="mb-2 flex gap-3">
      <RouterLink
        to=""
        v-for="categoryItem in blog.categories"
        :key="categoryItem.id"
        :style="{
          background: `-webkit-linear-gradient(315deg, ${categoryItem.color[0]} 25%, ${categoryItem.color[1]})`
        }"
        class="font-semibold text-sm px-1 category"
      >
        {{ categoryItem.title }}
      </RouterLink>
    </div>
    <RouterLink
      :to="blogLink(blog.id, blog.slug)"
      :title="blog.title"
      class="mb-3 inline-block text-c-text"
    >
      <h2 class="text-xl font-bold">{{ blog.title }}</h2>
    </RouterLink>
    <RouterLink :to="blogLink(blog.id, blog.slug)">
      <p class="font-normal text-c-text-soft text-sm line-clamp-3">
        {{ blog.description }}
      </p>
    </RouterLink>

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
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.border-top {
  border-top: 1px solid  #6f717231 !important;
}
.border-top:first-child {
  border-top: 0px solid !important;
}
</style>
