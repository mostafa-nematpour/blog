<script setup>
import MainHeader from '~/components/header/MainHeader.vue'
import { useEventListener } from '~/composables/event'

const headerWrapper = ref(null)

const scrollThreshold = 500;
const scrollUpThreshold = 160;
const defaultTop = -1

let headerTop = defaultTop
let currentScrollY = 0
let lastScrollY = 0
let lastFullOpen = 0
// for first time after refreshed page header be open
let refresh = true;

useEventListener(window, 'scroll', handleScroll)

function handleScroll() {
    if (!headerWrapper.value) return;
    currentScrollY = parseInt(window.scrollY);

    if (refresh) {
        refresh = false
        return
    }

    if (currentScrollY < scrollThreshold) {
        headerTop = defaultTop
        headerWrapper.value.style.top = `${headerTop}px`;
        lastScrollY = currentScrollY;
        return
    }

    // when scroll up
    if (
        currentScrollY > lastScrollY && /* check scroll up */
        currentScrollY - lastFullOpen > scrollUpThreshold /* check scroll up threshold (when up after down)*/
    ) {
        headerTop = Math.max(
            -headerWrapper.value.clientHeight,
            headerTop - (currentScrollY - lastScrollY)
        )

    }
    // when scroll down
    else if (currentScrollY < lastScrollY) {
        headerTop = Math.min(defaultTop, headerTop + (lastScrollY - currentScrollY))
        if (headerTop == defaultTop) {
            lastFullOpen = currentScrollY
        }
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
