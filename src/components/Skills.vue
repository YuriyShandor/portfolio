<template>
  <section class="section" id="skills">
    <div class="container">
      <h2 class="section-ttl">{{skillsInfo.sectionTtl}}</h2>
      <div class="skills-block">
        <div
          class="tehnology-logo"
          v-for="item in skillsInfo.technologies"
          :key="item.logo"
          v-tooltip.top-center="item.ttl"
        >
          <img :src="item.logo" alt="" class="tehnology-logo__image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  props: ['skillsInfo']
}
</script>


<style scoped lang="scss">
.skills-block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.tehnology-logo {
  width: 60px;
  height: 60px;
  margin: 7px 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    display: none;
  }

  @media only screen and (min-width: 500px) {
    &:last-child {
      display: flex;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
    margin: 10px 7px;
  }

  @media only screen and (min-width: 992px) {
    width: 100px;
    height: 100px;
    margin: 15px 10px;
  }

  @media only screen and (min-width: 1200px) {

  }
}

.tehnology-logo__image {
  max-width: 100%;
  max-height: 100%;
}


</style>
