<template>
    <main class="home">
      <Header />
      <ContentBlock />
    </main>
</template>

<script>
import Header from '../components/Header';
import ContentBlock from '../components/ContentBlock';
export default {
  name:'Home',
  components:{
    Header,
    ContentBlock
  },
  watch:{
    
  }
}
</script>

<style lang="scss">
  $component: "home";
 
</style>