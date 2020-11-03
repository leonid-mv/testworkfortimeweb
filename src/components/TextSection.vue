<template>
  <div class="text_section">
    <div class="container">
      <h2>{{textSection.title}}</h2>
      <div class="text_section_container">
        <div class="left" v-html="textSection.left"></div>
        <div class="right" v-html="textSection.right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    textSection () {
      return this.$store.getters['textSection/getTextSection']
    }
  }
}
</script>