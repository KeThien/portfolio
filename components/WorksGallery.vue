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
        <WorkCard v-for="work in works" :key="work.sys.id" :work="work" :thumbnail-url="thumbnail(work)" />
      </div>
    </div>
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
        return {
          works: entries.items
        }
      })
      .catch(e => console.log(e))
  },
  methods: {
    thumbnail(work) {
      return work.fields.thumbnail.fields.file.url
    }
  }
}
</script>

<style>
</style>
