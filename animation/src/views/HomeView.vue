<script setup>
import {TransitionGroup, ref} from "vue";
const nameInput = ref("")
const names = ref(["Huỳnh Khánh Băng", "Nguyễn Thị Trúc Ngân"])
const addInvite = () => {
  names.value.unshift(nameInput.value);
  nameInput.value = ""
}
const remove = (name) => {
  names.value = names.value.filter(n => n !==name)
}
</script>
<template>
  <main>
   <div class="container">
    <input    
      v-model="nameInput" 
      type="text" 
      placeholder="Add person to invite" 
      @keypress.enter="addInvite"
    >
    <TransitionGroup name="invites" >
      <li v-for="name in names" :key="name" @click="remove(name)">{{ name }}</li>
    </TransitionGroup >
   </div>
  </main>
</template>
<style scoped>
.container{
  max-width: 300px;
  margin:  auto 
}
.container input{
  width: 100%;
  border-radius: 5px;
  border: 1px solid darkgray;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px black;
}
ul{
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
  width: 300px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 10px dimgrey;
  text-align: center;
  cursor: pointer;
}
 /* TransitionGroup */
 .invites-enter-from{
  opacity: 0;
  transform: scale(0);
 }
 .invites-enter-to{
  opacity: 1;
  transform: scale(1);
}
.invites-enter-active{
  transition: all 0.5s ease;
}
/* remove */
.invites-leave-from{
  opacity: 1;
  transform: scale(1);
 }
 .invites-leave-to{
  opacity: 0;
  transform: scale(0.5);
}
.invites-leave-active{
  transition: all 0.5s ease;
}
</style>