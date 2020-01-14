<template>
  <div id="app">
    <Header :headerInfo='info.headerInfo'/>
    <Banner :bannerInfo='info.bannerInfo' :generalInfo='info.generalInfo'/>
    <About :aboutInfo='info.aboutInfo' :generalInfo='info.generalInfo'/>
  </div>
</template>

<script>
import info from './info.json';

import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import About from './components/About.vue';

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    About
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
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Lato', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

.container {
  width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }

  // @media only screen and (min-width: 1320px) {
  //   width: 1270px;
  // }
  //
  // @media only screen and (min-width: 1420px) {
  //   width: 1370px;
  // }
}

.section {
  padding: 50px 0;
  width: 100%;

  &:nth-child(odd) {
    background: #f8f9fb;
  }

  @media only screen and (min-width: 768px) {
    padding: 75px 0;
  }

  @media only screen and (min-width: 992px) {
    padding: 100px 0;
  }

  @media only screen and (min-width: 1200px) {
    padding: 125px 0;
  }
}

@media only screen and (min-width: 500px) {

}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 992px) {

}

@media only screen and (min-width: 1200px) {

}

@media only screen and (min-width: 1320px) {

}

@media only screen and (min-width: 1420px) {

}
</style>
