<template>
  <footer>
    <div class="container">
      <div class="footer_container">
        <div class="copyright">{{footer.copyright}}</div>
        <a href="#" class="phone">{{footer.phone}}</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    footer () {
      return this.$store.getters['footer/getFooter']
    }
  }
}
</script>