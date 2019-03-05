<template>
  <a href="#">
    <div class="card">
      <div class="card__img">
        <img :src="thumbnailUrl">
      </div>
      <div class="card__title">{{ title }}</div>
    </div>
  </a>
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
      title: this.work.fields.title
    }
  }
}
</script>

<style lang="sass">
</style>
