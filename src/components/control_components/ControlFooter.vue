<template>
  <div class="item" :class="{active: show}">
    <div class="title_item" @click="show = !show">Footer</div>
    <transition 
      name="sidebar_item"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"  
    >
      <div class="item_sub" v-if="show">
        <div class="item_sub_section">
          <h4>Copyright</h4>
          <input type="text" :value="footer.copyright" @input="updateFooter({ copyright: $event.target.value })">
          <h4>Phone</h4>
          <input type="text" :value="footer.phone" @input="updateFooter({ phone: $event.target.value })">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    footer () {
      return this.$store.getters['footer/getFooter']
    }
  },
  methods: {
    updateFooter(changes) {
      this.$store.commit('footer/updateFooter', changes)
    },
    start(el) {
      el.style.height = el.scrollHeight + "px"
    },
    end(el) {
      el.style.height = ""
    }
  }
}
</script>