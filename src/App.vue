<template>
  <TheHeader></TheHeader>
  <div
  class="flex flex-wrap
  justify-center align-middle items-center mx-auto px-auto"
  >
    <Pokedex></Pokedex>
    <transition name="fade" mode="in-out">
      <StatsModal v-if="statsModalOpen"></StatsModal>
    </transition>
  </div>
</template>

<script>

import { mapState } from 'vuex';

import Pokedex from './components/Pokedex.vue';
import StatsModal from './components/StatsModal.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    Pokedex,
    StatsModal,
    TheHeader,
  },
  computed: {
    ...mapState([
      'statsModalOpen',
      'calledModal',
    ]),
  },
};
</script>

<style scoped>

  /* FADE EFFECTS */

  .fade-leave-to,
  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 400ms ease;
  }

  .fade-move {
    transition: all 300ms linear;
  }

  .fade-leave-active {
    transition: all 200ms ease;
    position: absolute;
  }
</style>
