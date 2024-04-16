<script setup>
    import Grand from "./Grand.vue"
    import {useNumbersStore} from "../store/numbers"
    const {numbers,addNumbers} = useNumbersStore()
    </script>
<template>
    <h1>Child {{ numbers }}</h1>
    <button @click="addNumbers(3)">Add</button>
    <div class="line"></div>
    <Grand  />
</template>