<template>
    <main class="home">
      <Header />
      <ContentBlock />
      <AnimatedBlock />
    </main>
</template>

<script>
import Header from '../components/Header';
import ContentBlock from '../components/ContentBlock';
import AnimatedBlock from '../components/AnimatedBlock';
export default {
  name:'Home',
  components:{
    Header,
    ContentBlock,
    AnimatedBlock
  },
  watch:{
    
  }
}
</script>

<style lang="scss">
  $component: "home";
 
</style>