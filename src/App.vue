<template>
  <main class="bg-custom min-h-screen">
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
  themeChange(false)
})

</script>


<style >
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Gloria+Hallelujah&family=Permanent+Marker&display=swap');



.gloria-hallelujah-regular {
  font-family: "Gloria Hallelujah", cursive;
  font-weight: 400;
  font-style: normal;
}

.permanent-marker-regular {
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-style: normal;
}



.comic-neue {
  font-family: "Comic Neue", cursive;
  font-weight: 400;
  font-style: normal;
}




</style>
