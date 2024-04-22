<script setup lang="ts">
import { ref, watch } from 'vue'
import { default as showdown } from 'showdown'

const showHTMLFlag = ref('html')
const compressorFlag = ref(true)
const outputLinCount = ref(0)
const dirRTL = ref(true)

const text = ref('###hi') // input
const html = ref('') // output

const converter = new showdown.Converter()

const parsData = (newText: string) => {
  let newHtml = converter.makeHtml(newText)

  if (compressorFlag.value) {
    // Use a regexp to match <code> content
    const regex = /<code>[\s\S]*?<\/code>/g
    // Replace with transformed content
    newHtml = newHtml.replace(regex, (match: any) => {
      return match.replace(/\n/g, '<br>')
    })
    newHtml = newHtml.replace(/\n/g, ' ')
  }

  html.value = newHtml
  outputLinCount.value = newHtml.split('\n').length
}

const copyHtmlToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(html.value)
    alert('Text copied to clipboard')
  } catch (err) {
    alert('Failed to copy')
  }
}

watch(text, (newText) => {
  parsData(newText)
})

watch(compressorFlag, () => {
  parsData(text.value)
})

parsData(text.value)

useSeoMeta({
  title: 'editor',
  ogTitle: 'editor',
  description: '',
  ogDescription: '',
  ogImage: ''
})
</script>

<template>
  <div
    class="bg-bg-color-3 fixed w-full h-full top-0 bottom-0 right-0 left-0 inline-block font-sahel"
  >
    <div class="h-full flex gap-1 flex-col">
      <div
        class="bg-bg-color-2 overflow-y-auto overflow-x-hidden max-w-[760px] w-full m-auto relative rounded-[4px] px-2 flex gap-3 py-1"
      >
        <div class="flex gap-1">
          <input type="radio" id="one" value="html" v-model="showHTMLFlag" />
          <label for="one">html</label>
        </div>
        <div class="flex gap-1">
          <input type="radio" id="two" value="code" v-model="showHTMLFlag" />
          <label for="two">code</label>
        </div>
        <div class="flex gap-1">
          <input type="checkbox" id="dir-rtl" v-model="dirRTL" />
          <label for="dir-rtl">{{ dirRTL ? 'rtl' : 'ltr' }}</label>
        </div>
        <div>
          <input type="checkbox" id="compressor-flag" v-model="compressorFlag" />
          <label for="compressor-flag">compressor to one line - </label>
          line Count: {{ outputLinCount }}
        </div>
        <button
          @click="copyHtmlToClipboard"
          class="bg-bg-color-3 text-slate-200 rounded px-1 font-semibold"
        >
          copy html
        </button>
      </div>
      <div
        v-if="showHTMLFlag == 'html'"
        v-html="html"
        :dir="dirRTL ? 'rtl' : 'ltr'"
        class="bg-bg-color-2 overflow-y-auto overflow-x-hidden max-w-[760px] w-full flex-1 m-auto relative rounded-[4px] px-2 py-3 blog-content"
      ></div>
      <div
        v-else-if="showHTMLFlag == 'code'"
        class="bg-bg-color-2 overflow-y-auto overflow-x-hidden max-w-[760px] w-full flex-1 m-auto relative rounded-[4px] px-2 py-3 blog-content"
      >
        <textarea :value="html" class="w-full h-full" type="text" />
      </div>
      <div
        class="bg-bg-color-2 max-w-[760px] m-auto flex-1 w-full relative rounded-[4px] px-2 py-3 flex"
      >
        <textarea v-model="text" class="w-full h-full" type="text" />
      </div>
    </div>
  </div>
</template>
