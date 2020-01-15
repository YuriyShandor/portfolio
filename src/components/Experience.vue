<template>
  <section class="section" id="experience">
    <div class="container">
      <h2 class="section-ttl">{{experienceInfo.sectionTtl}}</h2>
      <div class="experience-block">
        <div
          class="experience-item"
          v-for="item in experienceInfo.experience"
          :key="item.ttl"
        >
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  props: ['experienceInfo']
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
  width: 100px;
  height: 100px;
  margin: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tehnology-logo__image {
  max-width: 100%;
  max-height: 100%;
}


</style>
