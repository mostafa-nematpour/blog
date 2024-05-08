<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import CommentListItem from '~/components/blog/CommentListItem.vue'
import CommentListLoading from './CommentListLoading.vue';

const props = defineProps(
  {
    postId: {
      required: true
    },
  }
)

const { isFetching, error, data, execute } = useFetch(
  `https://grogu.liara.run/comment/post/${props.postId}`,
  { immediate: false }
).get().json()

onMounted(() => {
  execute()
})
</script>

<template>
  <div class="pb-10 mt-8">

    <div v-if="error" class="flex items-center flex-col">
      <span class="mb-2 text-2xl font-black text-c-text">
        ⚠️ اوه! خطایی روی داده :(
      </span>
      <p class="text-xs">متاسفانه در حال حاضر نمی‌توانیم نظرات را نشان دهیم</p>
    </div>
    <template v-else-if="data">
      <div>لیست نظرات</div>
      <br>
      <ul>
        <li v-for="(item, index) in data" :key="item.id">
          <CommentListItem :item="item"></CommentListItem>
        </li>
      </ul>
    </template>
    <div v-else>
      <CommentListLoading />
    </div>

  </div>
</template>

<style scoped></style>