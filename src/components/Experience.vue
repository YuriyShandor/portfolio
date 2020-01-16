<template>
  <section class="section" id="experience">
    <div class="container">
      <h2 class="section-ttl">{{experienceInfo.sectionTtl}}</h2>
      <div class="experience-block">
        <div
          class="experience-item"
          v-for="item in experienceInfo.experience"
          :key="item.company"
        >
          <div class="experience-item__info">
            <a :href="item.companyLink" class="experience-item__company">{{item.company}}</a>
            <div class="experience-item__position">{{item.position}}</div>
            <div class="experience-item__period">{{item.period}}</div>
          </div>
          <a v-if="item.companyLogo" :href="item.companyLink" class="experience-item__company-link">
            <img :src="item.companyLogo" alt="" class="experience-item__company-logo">
          </a>
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
.experience-block {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.experience-item {
  width: 100%;
  background: #fff;
  border: 1px solid #eee;
  border-bottom: none;
  display: flex;
  flex-direction: column-reverse;
  padding: 15px;

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-bottom: 1px solid #eee;
    border-radius: 0 0 5px 5px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
  }

  @media only screen and (min-width: 992px) {
    padding: 40px 25px;
  }
}

.experience-item__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.experience-item__company {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 7px;
  transition: all, .3s;

  &:hover {
    color: #1e88e5;
  }

  @media only screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
}

.experience-item__position {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 7px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
}

.experience-item__period {
  font-size: 16px;
  font-weight: 400;
  color: #9e9e9e;

  @media only screen and (min-width: 1200px) {
    font-size: 18px;
  }
}

.experience-item__company-link {
  width: 100px;
  margin-bottom: 15px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1200px) {
    width: 150px;
  }
}

.experience-item__company-logo {
  width: 100%;
  height: auto;
}
</style>
