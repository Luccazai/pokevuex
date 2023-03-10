<template>
  <div class="statsModal">
    <div class="modalContent">
      <div class="modalHeader">
        <div class="modalHeaderTitle"><p>#{{ pokemon.id }} - {{ pokemon.name }}</p></div>
        <div class="closeButton">
          <button @click.prevent="statsModalToggle">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div class="modalBody">
        <div class="modalBodyImgContainer">
          <img
          class="modalBodyImage"
          v-bind:src="showSprite"
          v-bind:alt="pokemon.name"
          @mouseover="showShiny = true" @focusin="showShiny = true"
          @mouseleave="showShiny = false" @focusout="showShiny = false"
          />
          <div class="modalBodyExtraInfos">
            <p><i class="fa-solid fa-arrows-up-down"></i> Height: {{ pokemon.height / 10 }} m</p>
            <p><i class="fa-solid fa-weight-hanging"></i> Weight: {{ pokemon.weight / 10 }} kg</p>
          </div>
        </div>
        <div class="modalBodyInfos">
          <div class="modalBodyInfosBattleStats">
            <div class="flex justify-center">
              <img
              v-bind:src="shinySprite"
              v-bind:alt="`Shiny ${pokemon.name}`"
              class="md:hidden w-full"
              />
            </div>
            <p><i class="fa-solid fa-heart"></i> HP: {{ pokemon.stats[0].base_stat }}</p>
            <p><i class="fa-solid fa-burst"></i> Attack: {{ pokemon.stats[1].base_stat }}</p>
            <p><i class="fa-solid fa-shield"></i> Defense: {{ pokemon.stats[2].base_stat }}</p>
            <p><i class="fa-solid fa-star"></i> Special-attack: {{ pokemon.stats[3].base_stat }}</p>
            <p><i class="fa-solid fa-shield-halved"></i>
              Special-defense: {{ pokemon.stats[4].base_stat }}
            </p>
            <p><i class="fa-solid fa-bolt"></i> Speed: {{ pokemon.stats[5].base_stat }}</p>
          </div>
          <div class="typeRelations">
            <div class="strongAgainst">
              <StrongAgainst></StrongAgainst>
              <WeakAgainst></WeakAgainst>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapState } from 'vuex';
import StrongAgainst from './StrongAgainst.vue';
import WeakAgainst from './WeakAgainst.vue';

export default {
  name: 'StatsModal',
  components: {
    StrongAgainst,
    WeakAgainst,
  },
  computed: {
    ...mapState({
      pokemon: 'calledModal',
    }),

    ...mapMutations([
      'statsModalToggle',
    ]),

    showSprite() {
      if (this.showShiny) {
        return this.shinySprite;
      }
      return this.defaultSprite;
    },
  },
  data() {
    return {
      showShiny: false,
      shinySprite: String,
      defaultSprite: String,
    };
  },
  beforeMount() {
    const shinyImg = this.pokemon.sprites.front_shiny;
    const defaultImg = this.pokemon.sprites.front_default;

    if (shinyImg === null) {
      this.shinySprite = 'https://s-media-cache-ak0.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png';
    } else {
      this.shinySprite = shinyImg;
    }

    if (defaultImg === null) {
      this.defaultSprite = 'https://s-media-cache-ak0.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png';
    } else {
      this.defaultSprite = defaultImg;
    }
  },
};
</script>

<style scoped>
  .statsModal {
    @apply fixed z-50 overflow-y-auto inset-0 w-full h-full p-3
    backdrop-blur-lg bg-neutral-800/80 overflow-hidden
    mb-10 md:mb-0
    flex items-center;
  }

  .modalContent {
    @apply w-4/5 h-full xl:h-4/5 md:border-white md:border-2 md:p-4 mx-auto tall:h-full;
  }

  .modalBodyImgContainer {
    @apply hidden md:block;
  }

  .modalHeader {
    @apply relative mr-0 w-full flex justify-around my-2;
  }

  .modalHeaderTitle {
    @apply text-white font-semibold capitalize w-1/2 text-center;
  }

  .closeButton {
    @apply w-1/2 text-end;
  }

  .modalBody {
    @apply grid grid-cols-1 md:grid-cols-2 p-2 h-full;
  }

  .modalBodyImage {
    @apply w-72 py-4 mx-auto relative;
    -webkit-user-drag: none
  }

  .modalBodyExtraInfos {
    @apply text-white;
  }

  .modalBodyInfos {
    @apply text-white capitalize first:uppercase h-full p-5;
  }

  .modalBodyExtraInfos {
    @apply text-center normal-case;
  }

  /* ICONS COLOR */

  .fa-xmark {
    @apply text-white;
  }

  .fa-heart {
    @apply text-red-600;
  }

  .fa-burst {
    @apply text-yellow-400;
  }

  .fa-shield {
    @apply text-slate-400;
  }

  .fa-star {
    @apply text-emerald-400;
  }

  .fa-shield-halved {
    @apply text-neutral-200;
  }

  .fa-bolt {
    @apply text-yellow-300;
  }

  .fa-arrows-up-down, .fa-weight-hanging {
    @apply text-slate-200;
  }
</style>
