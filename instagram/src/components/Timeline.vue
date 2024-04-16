<script setup>
import Containers from "./Containers.vue";
import Card from "./Card.vue";
const data = [
  {
    id: 1,
    username: "SonGoKu",
    url: "https://cdn.wccftech.com/wp-content/uploads/2015/04/Dragon-Ball-2.png",
    caption: "No.1",
  },
  {
    id: 2,
    username: "Vegeta",
    caption: "No.2",
    url: "https://th.bing.com/th/id/OIP.GZt6e-flb2PHLTBshHwlagHaSw?w=115&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    username: "SonGoHan",
    caption: "No.3",
    url: "https://th.bing.com/th/id/OIP.Oxl_WhfwRzb9zahGJrLuQAHaKT?w=178&h=248&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    caption: "No.4",
    username: "Trunk Future",
    url: "https://th.bing.com/th/id/OIP.mnDisal8Qkgn6lw4JN_6lQHaJ4?pid=ImgDet&w=207&h=275&c=7",
  },
];
</script>
<template>
  <Containers>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post" />
    </div>
  </Containers>
</template>
<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
</style>