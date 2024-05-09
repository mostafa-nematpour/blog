<script setup>
import { getGravatarUrl } from '~/utils/profile'
import { toPersianString } from '~/utils/string'
import { daysBetween } from '~/utils/dateTime'
const props = defineProps({
  item: {
    type: Object,
  },
})

const normalizedContent = computed(() => {
  const pContent = toPersianString(props.item.content)
  return pContent.replace(/\n{4,}/g, "\n\n\n")
})

</script>

<template>
  <div class="max-w-full">
    <div class="flex gap-2 mb-3 items-start max-w-full relative">
      <img class="w-9 rounded-full aspect-square object-cover sticky top-2" :src="getGravatarUrl(item.mailHash)"
        :alt="`تصویر پروفایل کاربر با نام ${item.name}`">
      <div class="flex-1 max-w-full py-2 bg-c-bg-soft rounded-xl">
        <pre dir="rtl" class="content font-sahel text-c-text px-2 mb-2  font-medium">{{ normalizedContent }}</pre>
        <div class="flex justify-end items-start px-2 gap-1 font-vazirmatn font-medium text-xs">
          <div class="flex-1 flex justify-end">
            <span class="">{{ item.name }}</span>
          </div>
          <time :datetime="item.createdAt">
            {{ toPersianString(`${daysBetween(item.createdAt)}`) }}
            روز پیش
          </time>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>