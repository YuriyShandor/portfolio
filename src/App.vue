<template>
  <div id="app">
    <Banner :bannerInfo='info.bannerInfo'/>
  </div>
</template>

<script>
import info from './info.json';

import Banner from './components/Banner.vue';

export default {
  name: 'app',
  components: {
    Banner
  },
  data(){
    return{
      info: info
    }
  },
  mounted() {
    // console.log(this.data);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
