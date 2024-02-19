import { ref } from 'vue'
import { defineStore } from 'pinia'
import { posts } from '@/data'

export const useBlogStore = defineStore('blog', () => {
  
  // i know this is not good idea
  const blogsData = ref(posts)

  function getBlog(id: Number) {
    return blogsData.value.find((item) => item.id === id)
  }

  return { blogsData, getBlog }
})
