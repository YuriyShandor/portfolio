<template>
  <section class="banner">
    <div class="container banner__container">
      <h1 class="banner__ttl">I`m {{generalInfo.name}}</h1>
      <h2 class="banner__sub-ttl">{{generalInfo.profession}}</h2>
    </div>
    <img v-lazy="bannerInfo.image" alt="" class="banner__image">
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: ['bannerInfo', 'generalInfo']
}
</script>


<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-family: 'Josefin Sans', sans-serif;
  color: #fff;


  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(3, 49, 96, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}

.banner__container {
  position: relative;
  z-index: 3;
}

.banner__ttl {
  font-size: 30px;
  font-weight: 300;
  margin: 0;
  margin-bottom: 15px;

  @media only screen and (min-width: 500px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 60px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 70px;
    margin-bottom: 30px;
  }
}

.banner__sub-ttl {
  font-size: 24px;
  font-weight: 100;
  margin: 0;

  @media only screen and (min-width: 500px) {
    font-size: 34px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 54px;
    margin-bottom: 62px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 64px;
  }
}

.banner__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
</style>
