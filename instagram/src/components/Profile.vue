<script setup>
import Containers from "./Containers.vue";
import userBar from "./userBar.vue";
</script>
<template>
  <Containers>
    <div class="profile-container">
      <userBar 
          username="huynhkhanhbang"
          :userInfor="{
              posts:4,
              followers: 100,
              following : 2132
          }"
      

      />
    </div>
  </Containers>
</template>
<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 20px;
}
</style>