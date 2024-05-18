<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import CommentListItem from '~/components/blog/CommentListItem.vue'
import CommentListLoading from './CommentListLoading.vue';
import CommentListEmpty from './CommentListEmpty.vue';

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

const refreshCommentList = () => {
  execute()
}

defineExpose({ refreshCommentList })
</script>

<template>
  <div class="pb-10 mt-8 min-h-[148px]">
    <!-- <span @click="refreshCommentList">refresh</span> -->
    <template v-if="data">
      <template v-if="data.length > 0">
        <div @click="refreshCommentList">لیست نظرات <span v-if="isFetching" class="font-normal">درحال دریافت...</span>
        </div>
        <br>
        <TransitionGroup tag="ul" name="fade" class="container">
          <li v-for="(item, index) in data" :key="item.id">
            <CommentListItem :item="item"></CommentListItem>
          </li>
        </TransitionGroup>
      </template>
      <CommentListEmpty v-else></CommentListEmpty>
    </template>
    <div v-else-if="isFetching">
      <CommentListLoading />
    </div>
    <div v-if="error" class="flex items-center flex-col">
      <span class="mb-2 text-2xl font-black text-c-text">
        ⚠️ اوه! خطایی روی داده :(
      </span>
      <p class="text-xs">متاسفانه در حال حاضر نمی‌توانیم نظرات را نشان دهیم</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  list-style-type: none;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>