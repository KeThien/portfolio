<template>
  <footer>
    <div class="footer-content">
      <nav class="footer-nav footer-social">
        <p>Follow me on</p>
        <div class="social-links">
          <a href="https://www.facebook.com/giakethien" target="_blank"><i class="fab fa-facebook-square" /></a>
          <a href="https://www.instagram.com/kethien.art/" target="_blank"><i class="fab fa-instagram" /></a>
          <a href="https://github.com/KeThien" target="_blank"><i class="fab fa-github" /></a>
          <a href="https://www.linkedin.com/in/kethien/" target="_blank"><i class="fab fa-linkedin" /></a>
        </div>
      </nav>
      <nav class="footer-nav footer-menu">
        <h2><a v-scroll-to="'#top'" href="#"><strong>Ke Thien</strong> Nguyen</a></h2>
        <div class="links">
          <a v-scroll-to="'#top'" href="#" class="a-em">Home</a>
          <a v-scroll-to="'#hp-works'" class="main-nav__menu-item" href="#">Works</a>
          <a v-scroll-to="'#hp-about'" class="main-nav__menu-item" href="#">About</a>
          <a v-scroll-to="'#hp-contact'" class="main-nav__menu-item" href="#">Contact</a>
        </div>
      </nav>
    </div>
    <div class="footer-note">
      <small>Made with <span>❤</span> & Passion </small><small> © 2019</small>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
</style>
