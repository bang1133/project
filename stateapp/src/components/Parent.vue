<script setup>
    import Child from "./Child.vue"
    import { defineProps } from "vue";
    const {numbers} = defineProps(['numbers'])
</script>
<template>
    <h1>Parent</h1>
    <div class="line"></div>
    <Child />
</template>