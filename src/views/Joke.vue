<template>

  <main>
    <div class="mt-6 p-6 border rounded-lg shadow ">
      <h1 class=" text-center font-bold text-2xl px-6 pb-6">
        Tell me a Joke 😂
      </h1>
      <template v-if="jokesStore.lastJoke">


        <p class="text-center text-lg px-6 pb-3" :class="{ 'animate-fadeIn': animate }">
          {{ jokesStore.lastJoke.setup }}
        </p>
        <p class="text-center text-lg px-6 pb-6" :class="{ 'animate-fadeInDelay': animateDelay }">
          {{ jokesStore.lastJoke.punchline }}
        </p>
        <div class="flex items-center space-x-1 justify-center mb-3">
          <span v-for="starIndex in 5" class="icon-[mdi--star] size-8  cursor-pointer"
            @click="jokesStore.lastJoke.rating = starIndex"
            :class="[jokesStore.lastJoke.rating && jokesStore.lastJoke.rating >= starIndex ? 'text-yellow-400' : 'text-gray-300']"></span>
        </div>
        <p class=" text-gray-500 text-sm text-center ">
          Type: {{ jokesStore.lastJoke.type }}
        </p>

      </template>
    </div>
    <div class="mt-6 p-6 border rounded-lg shadow  grid grid-cols-1 md:grid-cols-2 gap-4">

      <div class="w-full mx-auto">
        <select class="select select-bordered w-full " v-model="selectedType">
          <option value="" selected>All Types</option>
          <option v-for="(type, index) in jokesStore.types" :key="index" :value="type">{{ type }}</option>
        </select>
       
      </div>

      <button @click="getJoke()" :disabled="loading" class=" btn btn-neutral rounded py-2">
        New Joke
      </button>
    </div>

    <div class="mt-6 p-6 border rounded-lg shadow ">
      <ListJokes simple :maxJokes="4"></ListJokes>
    </div>
  </main>

</template>

<script setup>


import { onMounted, ref, watch } from "vue";
import { useJokesStore } from "@/stores/jokes";

import ListJokes from "@/components/ListJokes.vue";

const jokesStore = useJokesStore()
const selectedType = ref('')
const loading = ref(false)
const animate = ref(false)
const animateDelay = ref(false)

onMounted(() => {
  jokesStore.getTypes()
})

const getJoke = async () => {
  loading.value = true

  try {
    if (selectedType.value) {
      await jokesStore.getByTypes(selectedType.value)
    } else {
      await jokesStore.getRandom()
    }
  } finally {
    loading.value = false
  }
}


watch(() => jokesStore.lastJoke, (newVal) => {
  if (newVal) {
    animate.value = true;
    animateDelay.value = true;
    setTimeout(() => {
      animate.value = false;
    }, 500);
    setTimeout(() => {
      animateDelay.value = false;
    }, 2000);
  }
})
</script>


<style></style>