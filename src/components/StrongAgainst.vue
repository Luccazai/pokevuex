<template>
  <div class="strongAgainst">
    <h3>
      <span class='capitalize'>{{ pokemon.name }}</span> is
      <span class="font-bold">strong</span> against the following types:
    </h3>
    <div
    v-for="(pokeType, index) in typeStrongAgainst"
    :key="index"
    class="strongAgainstTypes">
      <TypeBadge
      v-for="(typeStrong) in pokeType" :key="typeStrong.name"
      :type="typeStrong.name">
      </TypeBadge>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import TypeBadge from './TypeBadge.vue';

export default {
  name: 'StrongAgainst',
  computed: {
    ...mapState({
      pokemon: 'calledModal',
    }),
  },
  methods: {
    ...mapActions([
      'getTypeRelations',
    ]),
  },
  components: {
    TypeBadge,
  },
  data() {
    return {
      typeStrongAgainst: [],
    };
  },
  beforeMount() {
    /* eslint no-unused-expressions: "off" */
    this.pokemon.types.forEach((pokeType) => {
      if (pokeType.type.name === 'normal' && this.pokemon.types.length === 1) {
        this.typeStrongAgainst.push({
          0: {
            name: 'none',
          },
        });
      } else {
        this.getTypeRelations(pokeType.type.url)
          .then((response) => {
            this.typeStrongAgainst.push(response.data.damage_relations.double_damage_to);
          });
      }
    });
  },
};
</script>

<style>
 .strongAgainst{
  @apply p-3 px-0 normal-case;
 }

 .strongAgainstTypes {
  @apply flex justify-start gap-4 my-3;
 }
</style>
