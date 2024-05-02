<script setup>
import Containers from "./Containers.vue";
import userBar from "./userBar.vue";
import imagegallary from "./Imagegallary.vue"
</script>
<template>
  <Containers>
    <div class="profile-container">
      <userBar 
          username="huynhkhanhbang"
          :userInfo="{
              posts:4,
              followers: 100,
              following : 2132
          }"
      />
      <imagegallary 
          :images="[
            {
              id:1,
              img:'https://th.bing.com/th/id/OIF.RmK3nWWBIo9KVDdOUBpMHw?w=178&h=178&c=7&r=0&o=5&pid=1.7'
            }
          ]"
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