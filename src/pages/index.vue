<script setup>
import GlitchBox from '~/components/ui/glitch/GlitchBox.vue';
import { onMounted, onUnmounted, ref } from 'vue'
import { introSentences } from '~/data/site/intro'

const sentences = ref(introSentences)

const showLinks = ref(false)
let showLinksTimeout = null

const bodyClick = () => {
    showLinks.value = true
}

onMounted(() => {
    showLinksTimeout = setTimeout(() => {
        showLinks.value = true
    }, 16000)
})
onUnmounted(() => {
    clearTimeout(showLinksTimeout)
})

</script>

<template>
    <main @click="bodyClick" class="bg-[#111] w-full flex flex-col font-sahel">
        <glitch-box :words="sentences" class="max-w-[860px] w-full mt-6"></glitch-box>
        <div class="flex-1 flex items-center justify-center">
            <nav class="flex justify-center">
                <Transition>
                    <RouterLink v-if="showLinks" to="/posts"
                        class="font-medium text-white text-2xl border border-cyan-50 pt-1 pb-1.5 px-3 rounded-md">
                        لیست پست‌ها
                    </RouterLink>
                </Transition>
            </nav>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    max-height: -webkit-fill-available;
}
</style>