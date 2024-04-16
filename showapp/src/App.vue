<script setup>
  import BreakingCards from "./components/BreakingCards.vue"
  import RickCards from "./components/RickCards.vue"
</script>

<template>
  <main>
    <h1>Hero</h1>
   <Suspense>
      <template #default>
        <BreakingCards />
      </template>
      <template #fallback>
          <p>
            Loading...
          </p>
      </template>
   </Suspense>
   <RickCards />

  </main>
</template>

