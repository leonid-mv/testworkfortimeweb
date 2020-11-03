<template>
  <div class="item" :class="{active: show}">
    <div class="title_item" @click="show = !show">Text Section</div>
    <transition 
      name="sidebar_item"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"  
    >
      <div class="item_sub" v-if="show">
        <div class="item_sub_section">
          <h4>Title</h4>
          <input type="text" :value="textSection.title" @input="updateTextSection({ title: $event.target.value })">
          <h4>Text</h4>
          <textarea placeholder="Left Column" :value="textSection.left" @input="updateTextSection({ left: $event.target.value })"></textarea>
          <textarea placeholder="Right Column" :value="textSection.right" @input="updateTextSection({ right: $event.target.value })"></textarea>
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
    textSection () {
      return this.$store.getters['textSection/getTextSection']
    }
  },
  methods: {
    updateTextSection(changes) {
      this.$store.commit('textSection/updateTextSection', changes)
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