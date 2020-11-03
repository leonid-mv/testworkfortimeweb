<template>
  <div class="item" :class="{active: show}">
    <div class="title_item" @click="show = !show">Header</div>
    <transition 
      name="sidebar_item"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="item_sub" v-if="show">
        <div class="item_sub_section">
          <h4>Top Section</h4>
          
          <label for="backgroundImage" class="file">
            <input type="file" @change="backgroundImage" id="backgroundImage">
            <div class="button_file">+</div>
            <span>Background Image</span>
          </label>
          <div class="img_preview" v-if="header.background">
            <div class="removeImg" @click="removeBackgroundImage">&times;</div>
            <img :src="header.background">
          </div>

          <input type="text" :value="header.logo" @input="updateHeader({ logo: $event.target.value })">

          <div class="multi_item_sub_section">
            <div class="add_button" @click="addItemMenu">+</div>
            <h5>Top Menu</h5>
            <div 
              class="editItem"
              v-for="item in header.topMenu"
              :key="item.id"
            >
              <input
                type="text"
                :value="item.title"
                @input="updateHeaderMenu({
                  id: item.id, 
                  title: $event.target.value,
                  link: item.link
                })"
              >
              <div class="removeItem" @click="removeItemMenu(item.id)">&times;</div>
            </div>
          </div>
          
          <input type="text" placeholder="Phone" :value="header.phone" @input="updateHeader({ phone: $event.target.value })">

        </div>
        <div class="item_sub_section">
          <h4>Bottom Section</h4>
          <input type="text" placeholder="Main Title" :value="header.mainTitle" @input="updateHeader({ mainTitle: $event.target.value })">
          <textarea placeholder="Main Description" :value="header.mainDescription" @input="updateHeader({ mainDescription: $event.target.value })"></textarea>
          <input type="text" placeholder="Send Message" :value="header.buttonTitle" @input="updateHeader({ buttonTitle: $event.target.value })">
          <input type="text" placeholder="Link" :value="header.buttonLink" @input="updateHeader({ buttonLink: $event.target.value })">
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
    header () {
      return this.$store.getters['header/getHeader']
    }
  },

  methods: {
    updateHeader(changes) {
      this.$store.commit('header/updateHeader', changes)
    },
    updateHeaderMenu(changes) {
      this.$store.commit('header/updateHeaderMenu', changes)
    },

    backgroundImage(e) {
      const file = e.target.files[0];
      this.updateHeader({background: URL.createObjectURL(file)})
    },
    removeBackgroundImage() {
      this.updateHeader({background: null})
    },

    addItemMenu() {
      this.$store.commit('header/addHeaderMenu', {
        id: Date.now(),
        title: 'New Item',
        link: '#'
      })
    },
    removeItemMenu(id) {
      this.$store.commit('header/removeItemMenu', id)
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