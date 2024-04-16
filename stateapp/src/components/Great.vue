<script setup>
    import {useNumbersStore} from "../store/numbers"
    const {numbers,filterNum} = useNumbersStore()</script>
<template>
    <h1>Great {{ filterNum(4)}}</h1>
</template>