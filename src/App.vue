<template>
  <div class="container">
    <div class="jumbotron">
      <h1>NT2-TP-3</h1>
      <h2>Camila Delgado</h2>
      <br>
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped lang="css">
  .jumbotron {
    background-color: #d8bfd8;
    color: #702963
  }

</style>
