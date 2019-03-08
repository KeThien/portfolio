<template>
  <nuxt-link :to="{ name: 'work-slug', params: { slug: work.fields.slug}}">
    <div class="card">
      <div class="card__img">
        <div class="card__desc">
          <p>
            {{ desc }}
          </p>
        </div>
        <img :src="thumbnailUrl">
      </div>
      <div class="card__title">
        {{ title }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: this.work.fields.title,
      desc: this.work.fields.smallDescription
    }
  }
}
</script>

<style lang="sass">
</style>
