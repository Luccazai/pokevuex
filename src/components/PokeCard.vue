<template>
  <div class="pokeCard">
    <div class="pokeImgContainer" @click.prevent="statsModalToggle(pokemon)">
      <img v-bind:src="pokeImage"
      v-bind:alt="pokeName"
      class="pokeImg"
      />
    </div>
    <div class="pokeInfo">
      <p>{{ pokeName }}</p>
      <p>#{{ pokeID }}</p>
    </div>
    <div class="pokeTypes">
      <TypeBadge v-for="(pokeType) in pokeTypes"
      :key="pokeType.slot"
      :type="pokeType.type.name">
      </TypeBadge>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import TypeBadge from './TypeBadge.vue';

export default {
  name: 'PokeCard',
  props: {
    pokemon: Object,
  },
  components: {
    TypeBadge,
  },
  data() {
    return {
      pokeName: this.pokemon.name,
      pokeID: this.pokemon.id,
      pokeImage: this.pokemon.sprites.front_default,
      pokeTypes: this.pokemon.types,
    };
  },
  methods: {
    ...mapMutations([
      'statsModalToggle',
    ]),
  },
};
</script>

<style scoped>
  .pokeCard {
    @apply bg-slate-200 rounded-3xl w-48 grid m-5;
  }

  .pokeImgContainer {
    @apply bg-slate-300 rounded-t-3xl;
  }

  .pokeImg {
    @apply w-full h-48 z-30 relative;
    -webkit-user-drag: none;
  }

  .pokeInfo {
    @apply p-6 pb-1 font-medium capitalize px-3 py-3 text-center;
  }

  .pokeTypes {
    @apply p-3 pt-0 flex justify-center space-x-1;
  }
</style>
