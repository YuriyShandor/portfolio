<template>
  <section class="section education" id="education">
    <div class="container">
      <h2 class="section-ttl">{{educationInfo.sectionTtl}}</h2>
      <div class="education-block">
        <div class="university-info">
          <h4 class="university-info__ttl">{{educationInfo.universityTtl}}</h4>
          <div class="university-info__specialty">{{educationInfo.specialty}}</div>
          <div class="university-info__degree">{{educationInfo.degree}}</div>
        </div>
        <a :href="educationInfo.universityLink" class="university-logo">
          <img :src="educationInfo.universityLogo" alt="" class="university-logo__image">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
  props: ['educationInfo']
}
</script>


<style scoped lang="scss">
.education-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.university-info {

}

.university-info__ttl {
  font-size: 16px;
  font-weight: 700;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 22px;
  }
}

.university-info__specialty {
  font-size: 16px;
  font-weight: 400;
  margin-top: 7px;
  margin-bottom: 5px;

  @media only screen and (min-width: 768px) {
    margin-top: 10px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
    margin-top: 15px;
  }
}

.university-info__degree {
  font-size: 16px;
  font-weight: 400;

  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }
}

.university-logo {
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 150px;
  }

  @media only screen and (min-width: 992px) {
    width: 200px;
  }

  @media only screen and (min-width: 1200px) {
    width: 250px;
  }
}

.university-logo__image {
  width: 100%;
  height: auto;
}
</style>
