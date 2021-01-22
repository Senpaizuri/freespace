<template>
  <div class="app">    
    <Navigation />

    <transition
      name="fade"
      mode="out-in"
    >
    
      <router-view />

    </transition>

    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation';

import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Footer,
    Navigation
  }
}
</script>

<style lang="scss">
  $component: 'app';
  .#{$component}{
   


  }
</style>
