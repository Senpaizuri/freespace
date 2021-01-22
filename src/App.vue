<template>
  <div class="app">
    
    <Navigation />
    
    <router-view />
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
