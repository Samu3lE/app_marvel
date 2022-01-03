import { createStore } from "vuex";

const apiRUL = "https://gateway.marvel.com:443/v1/public/characters?";
const apiKey = "apikey=7959aa92bf277576f2b516dbbaa3b8d3";
export default createStore({
    state: {
        characters: [],
        charactersFilter: [],
        pages: [],
    },
    mutations: {
        setCharacters(state, load) {
            state.characters = load;
        },
        setCharactersFilter(state, load) {
            state.charactersFilter = load;
        },
        setPages(state, load) {
            state.pages = load;
        },
    },
    actions: {
        async getCharacters({ commit }, page = "") {
            try {
                const response = await fetch(!page ? apiRUL + apiKey : page);
                const data = await response.json();
                console.log(data.data);

                commit("setCharacters", data.data.results);
                commit("setCharactersFilter", data.data.results);
                commit("setPages", data.data.results);
            } catch (error) {
                console.error(error);
            }
        },
    },
    modules: {},
});