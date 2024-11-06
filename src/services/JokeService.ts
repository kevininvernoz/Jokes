import Api from './ApiService';


export default {
    getRandom() {
        return Api().get(`/jokes/random`);
    },

    getByType(type:string) {
        return Api().get(`/jokes/${type}/random`);
    },

    getTypes() {
        return Api().get(`/types`);
    }
}