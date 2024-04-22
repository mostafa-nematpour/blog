<script setup>
import MainHeader from '~/components/header/MainHeader.vue'
</script>

<template>
  <div class="fixed left-0 right-0 top-[-1px] z-[500] fixed-header">
    <MainHeader class="bg-c-header-bg"><slot></slot></MainHeader>
  </div>
</template>

<style scoped>
.fixed-header {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
