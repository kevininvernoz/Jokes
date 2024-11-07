<template>
  <main class=" min-h-screen">
    <div class=" max-w-5xl mx-auto ">

   
      <div class=" grid grid-cols-1 gap-4 mx-4">



        <RouterView></RouterView>



      </div>
    </div>
  </main>

</template>


<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import { themeChange } from 'theme-change'
import { onMounted, ref } from 'vue';

onMounted(() => {
  themeChange(true)
})

</script>


<style >
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

.gloria-hallelujah-regular {
  font-family: "Gloria Hallelujah", cursive;
  font-weight: 400;
  font-style: normal;
}

</style>
