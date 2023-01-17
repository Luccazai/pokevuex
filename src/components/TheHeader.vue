<template>
  <header>
    <div class="logo">
      <img src="../assets/pokevuex.png" alt="Pokevuex Logo" class="w-2/4"/>
    </div>
    <div>
      <a href="https://github.com/Luccazai/pokevuex" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style>
 header {
  @apply flex md:justify-between mx-20 py-5;
 }

 .fa-github {
  @apply hover:text-white transition duration-300 text-3xl md:text-4xl text-secondaryBlue;
 }
</style>
