<template>
  <header :style="{backgroundImage: 'url(' + header.background + ')'}">
    <div class="container">
      <div class="header_top_section">
        <a href="#" class="logo">{{header.logo}}</a>
        <div class="top_menu">
          <nav>
            <ul>
              <li
                v-for="(item, idx) in header.topMenu"
                :key="idx"
              >
                <a :href="item.link">{{item.title}}</a>
              </li>
            </ul>
          </nav>
        </div>
        <a :href="header.phone" class="phone">{{header.phone}}</a>
      </div>

      <div class="header_bottom_section">
        <h1>{{header.mainTitle}}</h1>
        <p>{{header.mainDescription}}</p>
        <a :href="header.buttonLink" class="button">{{header.buttonTitle}}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    header () {
      return this.$store.getters['header/getHeader']
    }
  }
}
</script>