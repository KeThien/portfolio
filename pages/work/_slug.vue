<template>
  <section class="work-file">
    <h2>{{ work.fields.title }}</h2>
    <div v-html="$md.render(work.fields.description)" />
    <div>{{ description }}</div>
    <nuxt-link to="/#hp-works">
      <i id="btn-close" class="fas fa-times" />
    </nuxt-link>
    <div class="category">
      {{ work.fields.category[0] }}
    </div>
    <Swiper :images="work.fields.images" />
    <div class="client-info">
      <div class="client-info__left">
        <h3 class="client-name">
          {{ work.fields.clientName }}
        </h3>
        <h3 class="client-link">
          <a :href="work.fields.linkUrl" target="_blank">Demo</a>
          <a :href="work.fields.sourceUrl" target="_blank">Source</a>
        </h3>
      </div>
      <div class="client-info__right">
        <div class="tags-list">
          <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
        </div> <!-- END TAGS-LIST -->
      </div>
    </div> <!-- END CLIENT-INFO -->
  </section>
</template>

<script>
import client from '~/plugins/contentful'
import Swiper from '~/components/Swiper'

export default {
  components: {
    Swiper
  },
  data() {
    return {}
  },
  asyncData({ params, error, payload }) {
    if (payload) return { work: payload }

    return client
      .getEntries({
        content_type: 'work',
        'fields.slug': params.slug
      })
      .then(entries => {
        return {
          work: entries.items[0],
          tags: entries.items[0].fields.tags
        }
      })
      .catch(e => console.log(e))
  },

  head() {
    return {
      title: this.work.fields.title
    }
  }
}
</script>

<style>
html {
  background-color: #3f2e56;
}
.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.6s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
