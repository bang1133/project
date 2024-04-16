<script setup>
    import Great from "./Great.vue"
    import { inject } from "vue";
    
    const numbers = inject  (['numbers'])
</script>
<template>
    <h1>Grand {{ numbers }}</h1>
    <div class="line"></div>
    <Great />
</template>