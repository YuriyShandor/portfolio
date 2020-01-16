<template>
  <section class="section" id="portfolio">
    <div class="container">
      <h2 class="section-ttl">{{portfolioInfo.sectionTtl}}</h2>
      <vue-dh class="portfolio-block" :transition="'in-ease-out'" :speed="500">
        <vue-dh-item
          v-for="item in portfolioInfo.portfolio"
          :key="item.ttl"
          :link="item.link"
          :image="item.image"
          class="portfolio-item"
        >
          <div slot="overlay">
            <span class="portfolio-item__ttl">{{item.ttl}}</span>
            <span class="portfolio-item__technologies">{{item.technologies}}</span>
          </div>
        </vue-dh-item>
      </vue-dh>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  props: ['portfolioInfo']
}
</script>


<style scoped lang="scss">
.portfolio-block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.portfolio-item {
  width: 275px !important;
  height: 325px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(3, 49, 96, 0.5);

  @media only screen and (min-width: 768px) {
    width: 210px !important;
    height: 260px !important;
  }

  @media only screen and (min-width: 1200px) {
    width: 270px !important;
    height: 320px !important;
  }
}

.portfolio-item__ttl {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}
</style>
