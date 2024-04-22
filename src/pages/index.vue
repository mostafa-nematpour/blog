<script setup>
import GlitchBox from '~/components/ui/glitch/GlitchBox.vue';
import AnimatedStar from '~/components/ui/background/AnimatedStar.vue';
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
    }, 10000)
})

onUnmounted(() => {
    clearTimeout(showLinksTimeout)
})

</script>

<template>
    <div class="bg-[#111] relative overflow-hidden">

        <main @click.once="bodyClick" class=" w-full flex flex-col font-sahel">
            <GlitchBox :words="sentences" class="max-w-[860px] w-full mt-6"></GlitchBox>
            <div class="flex-1 flex items-center justify-center">
                <nav class="flex justify-center">
                    <Transition>
                        <RouterLink v-show="showLinks" to="/posts"
                            class="font-medium text-white text-2xl border border-cyan-50 pt-1 pb-1.5 px-3 rounded-md">
                            لیست پست‌ها
                        </RouterLink>
                    </Transition>
                </nav>
            </div>
        </main>

        <!-- <AnimatedStar></AnimatedStar> -->
    </div>
</template>

<style scoped>
main {
    height: 100vh;
    max-height: -webkit-fill-available;
    /* background: radial-gradient(#480d35 ,#17151d); */
}
</style>