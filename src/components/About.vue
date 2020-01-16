<template>
  <section class="section" id="about">
    <div class="container">
      <div class="about-block">
        <div class="about-top">
          <img v-lazy="aboutInfo.photo" class="about-top__photo" alt="">
          <div class="about-top__block">
            <div class="about-top__info">
              <div class="about-top__info-name">{{generalInfo.name}}</div>
              <div class="about-top__info-profession">{{generalInfo.profession}}</div>
            </div>
            <div class="about-top__social">
              <span class="about-top__social-txt">{{aboutInfo.socialsFollowsText}}</span>
              <div class="about-top__socials">
                <a
                  :href="item.link"
                  v-for="item in generalInfo.socials"
                  :key="item.icon"
                  target="_blank"
                  class="about-top__socials-item"
                  :class="'about-top__socials-item_' + item.ttl"
                >
                  <i :class="item.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="personal-info__block">
          <h3 class="personal-info__heading">{{aboutInfo.sectionTtl}}</h3>
          <div class="personal-info__wrap">
            <div class="personal-info">
              <div class="personal-info__item">
                <div class="personal-info__item-ttl">{{aboutInfo.age.ttl}}</div>
                <div class="personal-info__item-content">{{ aboutInfo.age.val | moment("from", true) }}</div>
              </div>
              <div class="personal-info__item">
                <div class="personal-info__item-ttl">{{aboutInfo.experience.ttl}}</div>
                <div class="personal-info__item-content">{{ aboutInfo.experience.val | moment("from", true) }}</div>
              </div>
              <div class="personal-info__item">
                <div class="personal-info__item-ttl">{{aboutInfo.english.ttl}}</div>
                <div class="personal-info__item-content">{{aboutInfo.english.val}}</div>
              </div>
              <div class="personal-info__item">
                <div class="personal-info__item-ttl">{{aboutInfo.phone.ttl}}</div>
                <a :href="'tel:' + generalInfo.phone.val" class="personal-info__item-content">{{generalInfo.phone.val}}</a>
              </div>
              <div class="personal-info__item">
                <div class="personal-info__item-ttl">{{aboutInfo.email.ttl}}</div>
                <a :href="'mailto:' + generalInfo.email.val" class="personal-info__item-content">{{generalInfo.email.val}}</a>
              </div>
            </div>
            <a :href="aboutInfo.cv.val" target="_blank" class="download-cv">{{aboutInfo.cv.ttl}}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  props: ['aboutInfo', 'generalInfo']
}
</script>


<style scoped lang="scss">
.about-block {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.about-top {
  width: 100%;
  display: flex;
  justify-content: center;
}

.about-top__photo {
  width: 285px;
  height: auto;
  border-radius: 5px;
}

.about-top__block {
  width: 100%;
  display: none;

  @media only screen and (min-width: 992px) {
    width: calc(100% - 285px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

.about-top__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0 5px 5px 0;
  padding: 30px 0 20px 30px;
}

.about-top__info-name {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

.about-top__info-profession {
  font-size: 20px;
  font-weight: 400;
}

.about-top__social {
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: 30px;
}

.about-top__social-txt {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #c2c2c2;
  margin-right: 10px;
}

.about-top__socials {
  display: flex;
  align-items: center;
}

.about-top__socials-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
  display: block;

  &:last-child {
    margin-right: 0;
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    transition: all, .3s;
  }

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-size: 24px;
    transition: all, .3s;
  }

  &:hover {
    &::before {
      width: 102%;
      height: 102%;
    }

    i {
      color: #fff;
    }
  }

  &_facebook {
    border: 1.5px solid #475993;

    &::before {
      background: #475993;
    }

    i {
      color: #475993;
    }
  }

  &_skype {
    border: 1.5px solid #80c52c;

    &::before {
      background: #80c52c;
    }

    i {
      color: #80c52c;
    }
  }

  &_telegram {
    border: 1.5px solid #289fd9;

    &::before {
      background: #289fd9;
    }

    i {
      color: #289fd9;
    }
  }

  &_github {
    border: 1.5px solid #000;

    &::before {
      background: #000;
    }

    i {
      color: #000;
    }
  }
}

.personal-info__block {
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 65px;
  }
}

.personal-info__heading {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 30px;
  }
}

.personal-info__wrap {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-top: 35px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 45px;
    flex-direction: row;
  }
}

.personal-info {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.personal-info__item {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 15px;
  }
}

.personal-info__item-ttl {
  width: 100px;
  font-size: 14px;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 150px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
    width: 175px;
  }
}

.personal-info__item-content {
  font-size: 14px;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
  }
}

a.personal-info__item-content {
  color: #2c3e50;
  display: inline-block;
  width: fit-content;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #2c3e50;
    margin: 0 auto;
    transition: all, .3s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}

.download-cv {
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  padding: 8px 20px;
  background: #0e82f9;
  border-radius: 5px;
  margin-top: 20px;
  transition: all, .3s;

  &:hover {
    background: darken(#0e82f9, 7%);
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 30px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 0;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 20px;
    padding: 15px 40px;
  }
}
</style>
