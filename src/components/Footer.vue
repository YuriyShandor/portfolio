<template>
  <footer class="footer">
    <div class="footer-contacts">
      <div class="container">
        <div class="footer-contacts__block">
          <a :href="'tel:' + generalInfo.phone" class="footer-contacts__item">
            <i :class="generalInfo.phone.icon"></i>
            <span>{{generalInfo.phone.val}}</span>
          </a>
          <a :href="'mailto:' + generalInfo.email" class="footer-contacts__item">
            <i :class="generalInfo.email.icon"></i>
            <span>{{generalInfo.email.val}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-socials">
      <div class="container">
        <div class="footer-socials__block">
          <a
            :href="item.link"
            v-for="item in generalInfo.socials"
            :key="item.icon"
            target="_blank"
            class="footer-socials__item"
            :class="'footer-socials__item_' + item.ttl"
          >
            <i :class="item.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['generalInfo']
}
</script>


<style scoped lang="scss">
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.footer-contacts {
  width: 100%;
  padding: 25px 0;
  background: #26272f;

  @media only screen and (min-width: 992px) {
    padding: 35px 0;
  }
}

.footer-contacts__block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.footer-contacts__item {
  width: fit-content;
  font-size: 16px;
  font-weight: 400;
  color: #0e82f9;
  display: flex;
  align-items: center;
  margin: 7px 15px;
  position: relative;

  i {
    margin-right: 7px;
    margin-top: 3px;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #0e82f9;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -4px;
    transition: all, .3s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &:last-child {
    i {
      margin-top: 7px;
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 20px;
    margin: 0px 30px;
  }
}

.footer-socials {
  width: 100%;
  background: #232323;
}

.footer-socials__block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-socials__item {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  position: relative;
  // margin: 0 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all, .3s;

  &:last-child {
    margin-right: 0;
  }

  i {
    font-size: 24px;
    color: #0e82f9;
    transition: all, .3s;
  }

  &:hover {
    i {
      color: #fff;
    }
  }

  &_facebook {
    &:hover {
      background: #475993;
    }
  }

  &_skype {
    &:hover {
      background: #80c52c;
    }
  }

  &_telegram {
    &:hover {
      background: #289fd9;
    }
  }

  &_github {
    &:hover {
      background: #000;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 75px;
    height: 75px;

    i {
      font-size: 30px;
      color: #0e82f9;
      transition: all, .3s;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 95px;
    height: 95px;
  }
}
</style>
