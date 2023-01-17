<template>
  <template
  v-for="(pokemon, index) in pokemons" :key="index"
  >
    <PokeCard :pokemon="pokemon"></PokeCard>
  </template>
</template>

<script>

import { mapMutations, mapState } from 'vuex';
import PokeCard from './PokeCard.vue';

export default {
  name: 'App',
  components: {
    PokeCard,
  },
  computed: {
    ...mapState([
      'pokemons',
      'statsModalOpen',
      'calledModal',
    ]),
  },
  methods: {
    ...mapMutations([
      'getPokemonByName',
      'getPokemons',
    ]),
  },
  beforeMount() {
    try {
      this.getPokemons();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>

</style>
