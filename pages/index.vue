<template>
  <div class="homepage">
    <HomeHeader />
    <WorksGallery />
    <AboutMe />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '~/components/HomeHeader.vue'
import WorksGallery from '~/components/WorksGallery.vue'
import AboutMe from '~/components/AboutMe.vue'
import ContactMe from '~/components/ContactMe.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    HomeHeader,
    WorksGallery,
    AboutMe,
    ContactMe,
    Footer
  }
}
</script>

<style>
</style>
