<template>
  <div class="weakAgainst">
    <h3>
      <span class='capitalize'>{{ pokemon.name }}</span> is
      <span class="font-bold">weak</span> against the following types:
    </h3>
    <div
    v-for="(pokeType, index) in typeWeakAgainst"
    :key="index"
    class="weakAgainstTypes">
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
  name: 'weakAgainst',
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
      typeWeakAgainst: [],
    };
  },
  beforeMount() {
    /* eslint no-unused-expressions: "off" */
    this.getTypeRelations(this.pokemon.types[0].type.url)
      .then((response) => {
        this.typeWeakAgainst.push(response.data.damage_relations.double_damage_from);
      });
  },
};
</script>

<style>
 .weakAgainst{
  @apply p-3 px-0 normal-case;
 }

 .weakAgainstTypes {
  @apply flex justify-start gap-4 my-3;
 }
</style>
