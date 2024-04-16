<script setup>
import q from "./data/quizes.json";   
import {ref, watch} from "vue"
import { TransitionGroup } from "vue"
import Card from "./components/Card.vue"
import gsap from "gsap"

const quizes = ref(q)
const search = ref("")

watch(search, () => {
 quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = "scale(0.5)"
}

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    scale: 1,
    duration: 0.7,
    delay: el.dataset.index * 0.4

  })
}

const afterEnter = () => {
  // Your after enter logic here
}
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
    <TransitionGroup name="card" appear @before-enter="beforeEnter" 
                                          @after-enter="afterEnter"
                                          @enter="enter">
        <Card v-for="(quiz, index) in quizes" 
              :key="quiz.id" 
              :quiz="quiz" 
              :data-index="index" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background: rgb(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

/* Transition */
.card-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.card-enter-to {
  opacity: 1;
  transform: scale(1);
}

.card-enter-active {
  transition: all 0.5s ease;
}
</style>
