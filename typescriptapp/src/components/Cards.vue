<script setup lang="ts">
import { defineProps } from "vue";
import { GENDER, type INVITEE} from "../type"

defineProps<{
  invitee:INVITEE
}>();
</script>
<template>
  <div :style="{backgroundColor: invitee.gender === GENDER.MALE ? 'rgb(8,111,1111)' : 'rgb(1111,111,8)'}">
    {{ invitee.name }}
  </div>
</template>
<style scoped>
div {
  background-color: aqua;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
  padding: 3px;
  color: #fff;
}
</style>