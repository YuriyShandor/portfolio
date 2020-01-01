<template>
  <header class="header">
    <div class="header-block-wrap">
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


        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      isMenuVisible: false,
    }
  },
  mounted() {
    // console.log(this.data);
  }
}
</script>

<style scoped lang="scss">
@import "../../scss/variables.scss";

.header {
  width: 100%;
  position: relative;
}

.header-block-wrap {
  padding: 12px 0;
  border-bottom: 1px solid #ebeff6;

  @media only screen and (min-width: 768px) {
    padding: 20px 0;
  }

  @media only screen and (min-width: 1200px) {
    padding: 30px 0;
  }
}

.header-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

$hamburger-padding-x: 1px !default;
$hamburger-padding-y: 1px !default;
$hamburger-layer-width: 25px !default;
$hamburger-layer-height: 3px !default;
$hamburger-layer-spacing: 5px !default;
$hamburger-layer-color: #2A4270 !default;
$hamburger-layer-border-radius: 4px !default;

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

// ******* Collapse *******

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
