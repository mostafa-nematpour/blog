<script setup lang="ts">
import { useBlogStore } from '@/stores/blog';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const id = Number(route.params.id);
const store = useBlogStore();
const blog = ref(null);
store.getBlog(id);


</script>

<template>
    <div class="h-10">
        
    </div>
</template>

<style scoped></style>