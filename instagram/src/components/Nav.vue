<script setup>
import { RouterLink, useRouter } from "vue-router";
import Containers from "./Containers.vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/users";
import AuthModal from "./AuthModel.vue";
import { storeToRefs } from "pinia";
const router = useRouter();
const userStores = useUserStore();
const { user, loadingUser } = storeToRefs(userStores);
const searchUsername = ref("");
const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`);
    searchUsername.value = "";
  }
};
const handleLogout = async () => {
  await userStores.handleLogout();
};
//
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
          <div class="content" v-if="!loadingUser">
            <div class="left-container" v-if="!user">
              <AuthModal :isLogin="false" />
              <AuthModal :isLogin="true" />
            </div>
            <div class="left-container" v-else>
              <a-button type="primary">Profile</a-button>
              <a-button type="primary" @click="handleLogout">Log out</a-button>
            </div>
          </div>
        </div>
      </Containers>
    </a-layout-header>
  </a-layout>
</template>
<style scoped>
.content{
  display: flex;
  align-items: center;
}
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