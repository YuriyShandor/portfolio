<template>
  <header class="header">
    <div class="container">
      <div class="header-block">
        <button
          class="hamburger hamburger--collapse"
          :class="{ active: isMenuVisible }"
          @click="isMenuVisible = !isMenuVisible"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <nav class="header-nav" :class="{ active: isMenuVisible }">
          <ul class="header-nav__list">
            <li
              v-for="item in headerInfo.menu"
              :key="item.title"
              v-scroll-to="item.link"
              class="header-nav__item"
            >
              {{item.ttl}}
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['headerInfo'],
  data() {
    return {
      isMenuVisible: false,
    }
  },
  mounted() {
    let header = document.querySelector('.header');
    window.addEventListener('scroll', function(){
      let scrollPos = window.scrollY;
      let winHeight = window.innerHeight;

      if (scrollPos >= winHeight - 65) {
        // console.log(header);
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 12px 0;
  background: rgba(3, 49, 96, 0.95);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;

  @media only screen and (min-width: 768px) {
    padding: 15px 0;
  }

  @media only screen and (min-width: 992px) {
    position: absolute;
    top: unset;
    bottom: 0;
    padding: 20px 0;

    &.scroll {
      position: fixed;
      top: 0;
      bottom: unset;
    }
  }
}

.header-block {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.header-nav {
  position: fixed;
  top: 42px;
  left: 0;
  width: 100%;
  height: calc(100vh - 42px);
  overflow-y: auto;
  background: rgba(3, 49, 96, 0.95);
  padding: 25px 5vw;
  transform: translateX(-101%);
  transition: all, .5s;

  &.active {
    transform: translateX(0);
  }

  @media only screen and (min-width: 992px) {
    transform: translateX(0);
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    padding: 0;
    background: transparent;
  }
}

.header-nav__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
}

.header-nav__item {
  margin-bottom: 15px;
  display: block;
  width: fit-content;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #fff;
    margin: 0 auto;
    transition: all, .3s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 35px;
    font-size: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}

// Hamburger
$hamburger-padding-x: 0px !default;
$hamburger-padding-y: 0px !default;
$hamburger-layer-width: 25px !default;
$hamburger-layer-height: 1.5px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: #fff !default;
$hamburger-layer-border-radius: 1px !default;

.hamburger {
  padding: $hamburger-padding-y $hamburger-padding-x;
  display: inline-block;
  cursor: pointer;
  transition: all, .25s;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  outline: none !important;
  overflow: visible;

  &:hover {
    opacity: .7;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
}

.hamburger-box {
  width: $hamburger-layer-width;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: $hamburger-layer-height / -2;

  &, &::before, &::after {
    content: "";
    display: block;
    width: $hamburger-layer-width;
    height: $hamburger-layer-height;
    background-color: $hamburger-layer-color;
    border-radius: $hamburger-layer-border-radius;
    position: absolute;
    transition: transform, .15s ease;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

.hamburger--collapse {
  .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::after {
      top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  opacity 0.1s linear;
    }

    &::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.active {
    .hamburger-inner {
      transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                    opacity 0.1s 0.22s linear;
      }

      &::before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                    transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>
