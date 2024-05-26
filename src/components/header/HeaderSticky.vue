<script setup>
import MainHeader from '~/components/header/MainHeader.vue'

const headerWrapper = ref(null)
let currentScrollY = 0
let lastScrollY = 0

let headerTop = -1
const scrollThreshold = 500;

let refresh = true;

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
    if (!headerWrapper.value) return;
    currentScrollY = parseInt(window.scrollY);

    if (refresh) {
        refresh = false
        return
    }

    if (currentScrollY < scrollThreshold) {
        headerTop = -1
        headerWrapper.value.style.top = `${headerTop}px`;
        lastScrollY = currentScrollY;
        return
    }

    // when scroll up
    if (currentScrollY > lastScrollY) {
        headerTop = Math.max(
            -headerWrapper.value.clientHeight,
            headerTop - (currentScrollY - lastScrollY))
    }
    // when scroll down
    else if (currentScrollY < lastScrollY /*- scrollUpThreshold || currentScrollY < scrollThreshold*/) {
        headerTop = Math.min(-1, headerTop + (lastScrollY - currentScrollY))
    }

    lastScrollY = currentScrollY;
    headerWrapper.value.style.top = `${headerTop}px`;
}
</script>

<template>
    <div ref="headerWrapper" class="header-wrapper fixed left-0 right-0 z-[500] fixed-header">
        <MainHeader class="bg-c-header-bg">
            <slot></slot>
        </MainHeader>
    </div>
</template>

<style scoped>
.fixed-header {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
