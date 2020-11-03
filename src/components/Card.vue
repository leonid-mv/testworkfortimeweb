<template>
  <div class="card_section">
    <div class="container">
      <h2>{{card.title}}</h2>
      <div class="card_section_container">

        <div class="card" v-for="item in card.items" :key="item.id">
          <div class="card_img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div class="card_title">{{item.title}}</div>
          <div class="card_description">{{item.description}}</div>
          <a :href="item.link" class="button_small">{{item.buttonName}}</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    card () {
      return this.$store.getters['card/getCard']
    }
  }
}
</script>