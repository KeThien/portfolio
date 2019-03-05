<template>
  <section id="hp-works" class="works">
    <h2>My Works</h2>
    <!-- <div class="works__tags-filter">
      <div data-type="" class="button active">
        <span class="text">All</span>
      </div>
      <div data-type="tag1" class="button">
        <span class="text">tag1</span>
      </div>
      <div data-type="tag2" class="button">
        <span class="text">tag2</span>
      </div>
      <div data-type="tag3" class="button">
        <span class="text">tag3</span>
      </div>
    </div> -->
    <div class="wrapper">
      <div class="works__box">
        <WorkCard title="lorem autsirens" imgurl="/_nuxt/assets/img/placeholder-work.png" link="work.html" />
      </div>
    </div>
    {{ works[0].fields.title }}
    test
  </section>
</template>

<script>
import WorkCard from '~/components/WorkCard'
import client from '~/plugins/contentful'

export default {
  components: {
    WorkCard
  },
  data() {
    return {
      works: []
    }
  },
  mounted() {
    return client
      .getEntries({
        content_type: 'work',
        order: '-sys.createdAt'
      })
      .then(entries => {
        this.works = entries.items
        return { works: entries.items }
      })
      .catch(e => console.log(e))
  }
}
</script>

<style>
</style>
