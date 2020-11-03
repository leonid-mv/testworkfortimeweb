<template>
  <div class="item" :class="{active: show}">
    <div class="title_item" @click="show = !show">Card Section</div>
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
          <input type="text" :value="card.title" @input="updateCard({ title: $event.target.value })">
        </div>

        <div class="item_sub_section">
          <h4>Cards</h4>
          <div class="multi_item_sub_section">
            <h4>Edit card</h4>
            
            <div class="collections_control" v-for="item in card.items" :key="item.id">
              <div class="card_title">
                <h5>{{item.title}}</h5>
              </div>
              <label :for="item.id" class="file">
                <input type="file" @change="cardImage($event, item.id)" :id="item.id">
                <div class="button_file">+</div>
                <span>Card Image</span>
              </label>
              <div class="img_preview" v-if="item.img">
                <div class="removeImg" @click="removeImg(item.id)">&times;</div>
                <img :src="item.img">
              </div>
              
              <input 
                type="text" 
                :value="item.title" 
                @input="updateCardItem({
                  id: item.id,
                  title: $event.target.value
                })"
              >
              <textarea 
                :value="item.description"
                @input="updateCardItem({
                  id: item.id,
                  description: $event.target.value
                })"
              ></textarea>
              <input 
                type="text" 
                :value="item.buttonName"
                @input="updateCardItem({
                  id: item.id,
                  buttonName: $event.target.value
                })"
              >
              <input 
                type="text" 
                :value="item.link"
                @input="updateCardItem({
                  id: item.id,
                  link: $event.target.value
                })"
              >
            </div>

          </div>
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
    card () {
      return this.$store.getters['card/getCard']
    }
  },
  methods: {
    updateCard(changes) {
      this.$store.commit('card/updateCard', changes)
    },
    updateCardItem(changes) {
      this.$store.commit('card/updateCardItem', changes)
    },

    cardImage(e, id) {
      const file = e.target.files[0];
      this.updateCardItem({id, img: URL.createObjectURL(file)})
    },
    removeImg(id) {
      this.updateCardItem({id, img: null})
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