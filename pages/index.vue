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
import HomeHeader from '~/components/HomeHeader'
import WorksGallery from '~/components/WorksGallery'
import AboutMe from '~/components/AboutMe.vue'
import ContactMe from '~/components/ContactMe'
import Footer from '~/components/Footer'

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
