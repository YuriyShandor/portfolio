<template>
  <div class="banner">
    <h1 class="banner__ttl">{{bannerInfo.ttl}}</h1>
    <h2 class="banner__sub-ttl">{{bannerInfo.subTtl}}</h2>
    <img src="assets/images/banner-image.jpg" alt="" class="banner__image">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['bannerInfo']
}
</script>


<style scoped lang="scss">

</style>
