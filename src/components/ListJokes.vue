<template>

    <div>
        <div class="flex justify-between  mb-4"> 
            <div class="font-bold text-3xl">
                Joke History
            </div>
            <button v-if="!simple" @click="router.push({name:'Joke'})" class="btn btn-neutral ">
                New Joke
            </button>
        </div>
        <div class=" my-6">
            <select v-if="!simple"  class="select select-bordered w-full " v-model="selectedType">
                <option value="" selected>All Types</option>
                <option v-for="(type, index) in jokesStore.types" :key="index" :value="type">{{ type }}</option>
            </select>
        </div>
        <div class="grid lg:grid-cols-2 gap-4">

            <div v-for="(joke, index) in listjokes" :key="index"
                class=" shadow-lg rounded p-4 animate-fadeIn">
                <p class="text-gray-800 min-h-10">{{ joke.setup }}</p>
                <p class="text-gray-800 min-h-10">{{ joke.punchline }}</p>
                <div class=" flex justify-between  text-gray-500 mt-3">
                    <div> type: {{ joke.type }}</div>
                    <div class="flex items-center space-x-1">
                        <span v-for="starIndex in 5" class="icon-[mdi--star] "
                            :class="[joke.rating && joke.rating >= starIndex ? 'text-yellow-400' : 'text-gray-300']"></span>
                    </div>
                </div>
            </div>
        </div>

        <button v-if="simple" @click="router.push({ name: 'history' })"
            class=" btn btn-neutral btn-outline w-full mt-4 ">
            Show more
        </button>
    </div>




</template>

<script setup>

import { useJokesStore } from '@/stores/jokes';
import { computed,ref } from 'vue';
import router from '@/router';

const selectedType = ref('')
const jokesStore = useJokesStore()
const props = defineProps({
    simple: {
        type: Boolean,
        default: false
    },
    maxJokes: {
        type: Number,
        default: 10
    }
})
const listjokes = computed(() => {
    let jokes = [...jokesStore.jokes]

    if (selectedType.value) {
        jokes = jokes.filter(joke => joke.type === selectedType.value)
    }


    return jokes.slice(-(props.maxJokes + 1), jokesStore.jokes.length - 1).reverse()
})


</script>

<style></style>