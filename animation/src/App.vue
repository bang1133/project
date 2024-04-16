<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
 <header class="container">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</header>
<Transition name="route">
  <RouterView />
</Transition>
</template>
<style scoped>
.container{
  max-width: 300px;
  margin: 10px auto;
}
/* Transition */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.route-enter-leave {
  transition: all 0.4s ease;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
