<template>
  <header id="top">
    <div class="burger-nav-icon">
      <span />
      <span />
      <span />
    </div>
    <nav class="main-nav">
      <div class="main-nav__left" />
      <div class="main-nav__right">
        <a v-scroll-to="'#hp-works'" class="main-nav__menu-item" href="#">Works</a>
        <a v-scroll-to="'#hp-about'" class="main-nav__menu-item" href="#">About</a>
        <a v-scroll-to="'#hp-contact'" class="main-nav__menu-item" href="#">Contact</a>
      </div>
    </nav>

    <div id="scene" data-hover-only="true">
      <div data-depth="0" class="layer">
        <div class="overlay-beige" />
      </div>
      <div data-depth="0.1" class="layer">
        <div class="banner-l6" />
      </div>
      <div data-depth="0.2" class="layer">
        <div class="banner-l4" />
      </div>
      <div data-depth="0.15" class="layer">
        <div class="banner-l5" />
      </div>
      <div data-depth="0.5" class="layer">
        <div class="banner-l3" />
      </div>
      <div data-depth="0.3" class="layer">
        <h1>
          <strong>Ke Thien</strong> Nguyen <br>
          <span>Tinkerer at heart</span>
        </h1>
      </div>
      <div data-depth="0.6" class="layer">
        <div class="banner-l2" />
      </div>
      <div data-depth="0.8" class="layer">
        <div class="banner-l1" />
      </div>
      <div data-depth="1" class="layer">
        <div class="banner-l0" />
      </div>
    </div>
  </header>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  mounted() {
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)
    parallaxInstance.limit(100, 30)
    parallaxInstance.friction(0.075, 0.075)
    const viewportWidth = window.innerWidth
    if (viewportWidth < 375) {
      parallaxInstance.disable()
    }
  }
}
</script>

<style>
</style>
