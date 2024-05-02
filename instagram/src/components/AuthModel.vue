<script setup>
import { ref, defineProps, reactive } from "vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";
const open = ref(false);
const userStores = useUserStore();
const { errorMess, loading, user } = storeToRefs(userStores);
const props = defineProps(["isLogin"]);
const userCredentials = reactive({
  username: "",
  password: "",
  email: "",
});
const showModal = () => {
  open.value = true;
 };
const clearInput = () => {
  userCredentials.email = "";
  userCredentials.password = "";
  userCredentials.username = "";
  userStores.clearErr();
};
const handleOk = async (e) => {
  if(props.isLogin){
    await userStores.handleLogin({
      password: userCredentials.password,
      email: userCredentials.email
    });
  }
  else{
    await userStores.handleSignup(userCredentials);
  }
  if (user.value) {
    open.value = false;
    clearInput()
  }
};

const handlCancel = () => {
  userStores.clearErr();
  open.value = false;
};
const title = props.isLogin ? "Login" : "Sign Up";
</script>
  
  
<template>
  <div>
    <a-button class="btn" type="primary" @click="showModal">{{
      title
    }}</a-button>
    <a-modal v-model:open="open" title="title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handlCancel">Cancel</a-button>
        <a-button
          :disabled="loading"
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          >Submit</a-button
        >
      </template>
      <div v-if="!loading" class="input-container">
        <a-input
          class="input"
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
        />
        <a-input
          class="input"
          v-model:value="userCredentials.email"
          placeholder="Email"
        />
        <a-input
          class="input"
          v-model:value="userCredentials.password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div v-else class="spinner">
        <ASpin />
      </div>
      <a-typographyText v-if="errorMess" type="danger">{{
        errorMess
      }}</a-typographyText>
    </a-modal>
  </div>
</template>
<style scoped>
.btn {
  margin-left: 10px;
}
.input {
  margin-top: 15px;
}
.input-container {
  height: 150px;
}
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>