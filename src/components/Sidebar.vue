<template>
  <div class="sidebar" :class="{active: showSidebar}">
    
    <div class="close_sidebar" @click="$emit('showSidebar')">&times;</div>

    <ControlHeader />
    <ControlTextSection />
    <ControlCard />
    <ControlFooter />
    
  </div>
</template>

<script>
import ControlHeader from '@/components/control_components/ControlHeader'
import ControlTextSection from '@/components/control_components/ControlTextSection'
import ControlCard from '@/components/control_components/ControlCard'
import ControlFooter from '@/components/control_components/ControlFooter'

export default {
  props: ['showSidebar'],
  components: {
    ControlHeader,
    ControlTextSection,
    ControlCard,
    ControlFooter
  }
}
</script>