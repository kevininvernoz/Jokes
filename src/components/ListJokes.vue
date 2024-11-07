<template>

    <div>
        <div class="flex justify-between  mb-4">
            <div class="permanent-marker-regular font-semibold text-2xl">
                Joke History
            </div>
            <button v-if="!simple" @click="router.push({ name: 'Joke' })"
                class="permanent-marker-regular btn btn-neutral ">
                New Joke
            </button>
        </div>
        <div class=" my-6 grid grid-cols-4 gap-4 ">
            <select v-if="!simple" class="select select-bordered col-span-4 sm:col-span-1 " v-model="selectedType">
                <option value="" selected>All Types</option>
                <option v-for="(type, index) in jokesStore.types" :key="index" :value="type">{{ type }}</option>
            </select>
            <label v-if="!simple" class=" input input-bordered col-span-4 sm:col-span-3   flex items-center gap-2">
                <input type="text" v-model="searchText" class="grow" placeholder="Search" />
                <span class="icon-[mdi--search] size-6"></span>
            </label>
        </div>
        <div class="grid lg:grid-cols-2 gap-4">

            <div v-for="(joke, index) in paginatedJokes" :key="index" class=" shadow-lg rounded p-4 animate-fadeIn">
                <p class="text-gray-800 min-h-10 comic-neue">{{ joke.setup }}</p>
                <p class="text-gray-800 min-h-10 comic-neue">{{ joke.punchline }}</p>
                <div class=" flex justify-between  text-gray-500 mt-3">
                    <div> Type: {{ joke.type }}</div>
                    <div class="flex items-center space-x-1">
                        <span v-for="starIndex in 5" class="icon-[mdi--star] "
                            :class="[joke.rating && joke.rating >= starIndex ? 'text-yellow-400' : 'text-gray-300']"></span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!simple" class=" flex justify-end my-6">

            <div class="join">
                <button @click="previousPage" :disabled="currentPage === 1" class="join-item btn">«</button>
                <button class="join-item btn">{{ currentPage }} to {{ totalPages }}</button>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="join-item btn">»</button>
            </div>


        </div>



        <button v-if="simple" @click="router.push({ name: 'history' })"
            class=" btn btn-neutral btn-outline w-full mt-4 permanent-marker-regular">
            Show more
        </button>
    </div>




</template>

<script setup>

import { useJokesStore } from '@/stores/jokes';
import { computed, ref } from 'vue';
import router from '@/router';

const selectedType = ref('')
const jokesStore = useJokesStore()



const searchText = ref('')

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

    if (searchText.value) {
        jokes = jokes.filter(joke => joke.setup.toLowerCase().includes(searchText.value.toLowerCase()) || joke.punchline.toLowerCase().includes(searchText.value.toLowerCase()))
    }

    return jokes

})

const paginatedJokes = computed(() => {

    let jokes = [...listjokes.value]

    if (props.simple) {
        console.log("🚀 ~ listjokes ~ simple:", props.simple)
        console.log(-props.maxJokes, jokesStore.jokes.length - 1);
        console.log(jokes.slice(-(props.maxJokes + 1), jokesStore.jokes.length - 1));


        return jokes.slice(-(props.maxJokes + 1), jokesStore.jokes.length - 1).reverse()

    } else {
        console.log("🚀 ~ listjokes ~ jokes:", jokes)

        //devuelve la lista con los datos paginados de acuerdo a currentpage
        return jokes.slice((props.maxJokes * (currentPage.value - 1)), (
            props.maxJokes * currentPage.value
        )).reverse()

    }
})

const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(listjokes.value.length / props.maxJokes));



const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

</script>

<style></style>