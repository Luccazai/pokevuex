<template>
  <div class="typeBadge group" :class="type">
    <span class="typeDescription">{{ type }}</span>
  </div>
</template>

<script>
export default {
  name: 'TypeBadge',
  props: {
    type: String,
  },
};
</script>

<style scoped>

  .typeBadge {
    @apply w-6 h-6 block;
    background-size: cover;
  }

  .typeDescription {
    @apply hidden group-hover:block bg-slate-900 rounded-xl absolute
    text-white p-2 ml-9 capitalize font-semibold;
  }

  /* TYPE BADGES */

  .normal {
    background-image: url(../assets/type-icons/Icon_Normal.webp);
  }

  .fire {
    background-image: url(../assets/type-icons/Icon_Fire.webp);
  }

  .grass {
    background-image: url(../assets/type-icons/Icon_Grass.webp);
  }

  .poison {
    background-image: url(../assets/type-icons/Icon_Poison.webp);
  }

  .water {
    background-image: url(../assets/type-icons/Icon_Water.webp);
  }

  .electric {
    background-image: url(../assets/type-icons/Icon_Electric.webp);
  }

  .ground {
    background-image: url(../assets/type-icons/Icon_Ground.webp);
  }

  .rock {
    background-image: url(../assets/type-icons/Icon_Rock.webp);
  }

  .fighting {
    background-image: url(../assets/type-icons/Icon_Fighting.webp);
  }

  .flying {
    background-image: url(../assets/type-icons/Icon_Flying.webp);
  }

  .psychic {
    background-image: url(../assets/type-icons/Icon_Psychic.webp);
  }

  .steel {
    background-image: url(../assets/type-icons/Icon_Steel.webp);
  }

  .ice {
    background-image: url(../assets/type-icons/Icon_Ice.webp);
  }

  .ghost {
    background-image: url(../assets/type-icons/Icon_Ghost.webp);
  }

  .dark {
    background-image: url(../assets/type-icons/Icon_Dark.webp);
  }

  .bug {
    background-image: url(../assets/type-icons/Icon_Bug.webp);
  }

  .fairy {
    background-image: url(../assets/type-icons/Icon_Fairy.webp);
  }

  .dragon {
    background-image: url(../assets/type-icons/Icon_Dragon.webp);
  }

  .none {
    background-image: url(../assets/type-icons/none.png);
  }
</style>
