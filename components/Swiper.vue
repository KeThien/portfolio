<template>
  <div>
    <div v-swiper:mySwiper="swiperOption" class="my-swiper">
      <div class="swiper-wrapper gallery-container">
        <div v-for="(image, index) in images" :key="index" class="swiper-slide">
          <img :src="image.fields.file.url" :alt="image.fields.title">
        </div>
      </div>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
      <div class="swiper-pagination swiper-pagination-bullets" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      on: {
        slideChange() {
          console.log('onSlideChangeEnd', this)
        },
        tap() {
          console.log('onTap', this)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.my-swiper {
  width: 100%;
  .swiper-wrapper {
    margin: 0 auto;
    text-align: center;
  }
  .swiper-slide {
    width: 100%;
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #3f2e56;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: white;
    }
  }
  img {
    max-width: 100%;
    max-height: 460px;
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23453F78'%2F%3E%3C%2Fsvg%3E");
  }
  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23453F78'%2F%3E%3C%2Fsvg%3E");
  }
}
</style>
