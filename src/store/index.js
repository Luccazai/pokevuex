import { createStore } from 'vuex';
import pokemonApi from '../services/pokemonApi';

export default createStore({
  state: {
    pokemons: [],
    statsModalOpen: false,
    calledModal: {},
  },
  mutations: {
    getPokemonByName: async (state, pokemonName) => {
      try {
        const response = await pokemonApi.getPokemonByName(pokemonName);
        state.pokemons = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    getPokemons: async (state) => {
      const totalOfPokemons = await pokemonApi.getTotalOfPokemons()
        .then((response) => response.data.count)
        .catch((err) => {
          console.log(err);
        });

      /* eslint-disable no-await-in-loop */
      for (let index = 1; index <= totalOfPokemons; index += 1) {
        try {
          const response = await pokemonApi.getPokemonByID(index);
          state.pokemons.push(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    },

    // Modal

    statsModalToggle: (state, pokemon) => {
      state.statsModalOpen = !state.statsModalOpen;
      state.calledModal = pokemon;
    },
  },
  actions: {
    getTypeRelations: async (target, urlType) => {
      const type = urlType.slice(31);

      try {
        const response = await pokemonApi.getTypeRelations(type);
        return response;
      } catch (err) {
        console.log(err);
        return (err);
      }
    },
  },
});
