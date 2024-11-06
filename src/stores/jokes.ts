import { defineStore } from 'pinia';

import type { Joke } from '@/interfaces/joke.interface';
import JokeService from '@/services/JokeService';

export const useJokesStore = defineStore({
    id: 'Jokes',
    state: () => ({
        jokes: [] as Joke[],
        types: []
    }),
    persist: true,
    actions: {
        clear() {
            this.$reset();
        },
        async getTypes() {
            try {
                const response = await JokeService.getTypes();
                if (response.status === 200) {
                    this.$patch({
                        types: response.data
                    })
                }
            } catch (error) {
                console.error('Error fetching joke types:', error);
            }
        },
        async getByTypes(type: string) {
            try {
                const response = await JokeService.getByType(type);
                if (response.status === 200) {
                    this.$patch({
                        jokes: [...this.jokes, ...response.data]
                    })
                }
            } catch (error) {
                console.error('Error fetching jokes by type:', error);
            }
        },
        async getRandom() {
            try {
                const response = await JokeService.getRandom();
                if (response.status === 200) {
                    this.$patch({
                        jokes: [...this.jokes, response.data]
                    })
                }
            } catch (error) {
                console.error('Error fetching random joke:', error);
            }
        }
    },
    getters: {
        lastJoke(state) {
            return state.jokes.length ? state.jokes[state.jokes.length - 1] : null;
        },
    }
})