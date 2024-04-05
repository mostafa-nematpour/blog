<script setup>
import MainHeader from '~/components/header/MainHeader.vue'
</script>

<template>
  <div class="fixed left-0 right-0 top-[-1px] z-50 fixed-header">
    <MainHeader></MainHeader>
  </div>
</template>

<style scoped>
.fixed-header {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>
