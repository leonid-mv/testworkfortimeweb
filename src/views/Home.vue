<template>
  <div class="home_page">
    <h1>Welcome</h1>
    <form @submit.prevent="create">
      <input type="text" placeholder="Enter your site name" v-model="siteName" :class="{error: error}" @input="checkInput">
      <button class="button">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteName: '',
      error: false
    }
  },
  methods: {
    checkInput() {
      if (this.siteName) {
        this.error = false
      }
    },
    create() {
      if (this.siteName) {
        this.$store.commit('header/updateHeader', {logo: this.siteName})
        this.$router.push('create')
      } else {
        this.error = true
      }
    }
  },
}
</script>