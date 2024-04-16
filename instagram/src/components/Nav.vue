<script setup>
import { RouterLink, useRouter } from "vue-router";
import Containers from "./Containers.vue";
import { ref } from "vue";
import AuthModal from "./AuthModel.vue";
const router = useRouter()
const searchUsername = ref("");
const onSearch = () => {
  if(searchUsername.value){
      router.push(`/profile/${searchUsername.value}`)
      searchUsername.value = ""
  }
};
const isAuth = ref(false);
</script>

<template>
  <a-layout>
    <a-layout-header>
      <Containers>
        <div class="nav-container">
          <div class="right-container">
            <RouterLink to="/">Instagram</RouterLink>

            <a-input-search
              v-model:value="searchUsername"
              placeholder="username..."
              style="width: 200px; margin-top: 15px"
              @search="onSearch"
            />
          </div>
          <div class="left-container" v-if="!isAuth">
            <AuthModal :isLogin="false" />
            <AuthModal :isLogin="true" />
          </div>
          <div class="left-container" v-else>
            <a-button type="primary">Profile</a-button>
            <a-button type="primary">Log out</a-button>
          </div>
        </div>
      </Containers>
    </a-layout-header>
  </a-layout>
</template>
<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
}
.right-container {
  display: flex;
  justify-items: center;
}
.right-container a {
  margin-right: 15px;
}
.left-container {
  display: flex;
}
.left-container button {
  margin: 16px;
}
</style>