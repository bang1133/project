<script setup>
import { defineProps } from "vue";
const props = defineProps(["images"]);
</script>
<template>
  <div class="image-gallary-container">
    <img  alt="" 
        v-for="image in props.images" 
        :key="image.id"
        :src="image.img"
    />
  </div>
</template>
<style scoped>
.image-gallary-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
img {
  margin: 5px;
  width: 200px;
}
</style>