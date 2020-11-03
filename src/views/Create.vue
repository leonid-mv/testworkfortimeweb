<template>
  <div class="create_page">
    <div class="openSidebarButton" @click="showSidebar = !showSidebar"></div>
    <Sidebar :showSidebar="showSidebar" @showSidebar="showSidebar = !showSidebar" />
    <Header />
    <TextSection />
    <Card />
    <Footer />
    
    
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import TextSection from '@/components/TextSection'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default {
  data() {
    return {
      showSidebar: true
    }
  },
  components: {
    Sidebar,
    Header,
    TextSection,
    Card,
    Footer
  }
}
</script>
