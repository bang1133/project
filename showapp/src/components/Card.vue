<template>
  <NCard>
    <template #cover>
      <img :src="image" />
    </template>
    <h3>{{ name }}</h3>
    <div class="job">
      <div class="job">
        <b>{{ occupation.join(", ") }}</b>
      </div>
    </div>
  </NCard>
</template>

<script setup>
import { defineProps } from "vue";
const { image, name, occupation } = defineProps([
  "image",
  "name",
  "occupation",
]);
</script>

<style scoped>
.n-card {
  width: 200px;
  margin: 10px 20px;
}
.n-card img {
  height: 280px;
}
.job {
  display: flex;
  flex-wrap: wrap;
}
</style>
