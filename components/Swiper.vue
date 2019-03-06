<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        Slide 1
      </div>
      <div class="swiper-slide">
        Slide 2
      </div>
      <div class="swiper-slide">
        Slide 3
      </div>
      <div class="swiper-slide">
        Slide 4
      </div>
      <div class="swiper-slide">
        Slide 5
      </div>
      <div class="swiper-slide">
        Slide 6
      </div>
      <div class="swiper-slide">
        Slide 7
      </div>
      <div class="swiper-slide">
        Slide 8
      </div>
      <div class="swiper-slide">
        Slide 9
      </div>
      <div class="swiper-slide">
        Slide 10
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" />
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.esm.bundle'
export default {
  mounted() {
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style>
.swiper-container {
  width: 600px;
  height: 300px;
}
.swiper-slide {
  background-color: crimson;
  width: 100%;
}
</style>
