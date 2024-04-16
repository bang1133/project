<script setup>
import axios from "axios";
import { ref, watch, onMounted } from "vue";
import Card from "@/components/Card.vue";

</script>

<template>
  <div class="container">
    <div class="cards">
      <!-- <Card
        v-for="character in characters"
        :key="character.char_id"
        :image="character.img"
        :name="character.name"
        :occupation="character.occupation"
      /> -->
    </div>
    <div class="button-container">
      <!-- <button @click="page--">&lt</button>
      <button @click="page++">></button> -->
    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px;
}
.cards {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 950px;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}

</style>
