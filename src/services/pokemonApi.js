import api from './baseAPI';

export default {

  getPokemonByName(pokemonName) {
    const result = api().get(`pokemon/${pokemonName}`);
    return result;
  },

  getPokemonByID(pokemonID) {
    const result = api().get(`pokemon/${pokemonID}/`);
    return result;
  },

  getTotalOfPokemons() {
    const result = api().get('pokemon?limit=100000&offset=0');
    return result;
  },

  getTypeRelations(type) {
    const result = api().get(`type/${type}`);
    return result;
  },
};
