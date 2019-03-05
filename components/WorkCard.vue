<template>
  <a :href="link">
    <div class="card">
      <div class="card__img">
        <img :src="imgurl">
      </div>
      <div class="card__title">{{ title }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgurl: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
</style>
