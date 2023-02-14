<template>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Jumbotron from './components/Jumbotron.vue';
import Modal from './components/Modal.vue';
import Navbar from './components/Navbar.vue';
export default {

  components: {
    Navbar,
    Jumbotron
}
}
</script>
<style>

</style>