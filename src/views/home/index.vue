<template>
  <div>
    <app-header-tabs></app-header-tabs>
    <app-bar></app-bar>
    <app-slider></app-slider>
    <!-- <v-container class="d-flex flex-row align-stretch"> -->
    <app-tabs></app-tabs>
    <app-side-bar class="flex-grow-1"></app-side-bar>
    <!-- </v-container> -->
    <app-footer></app-footer>
  </div>
</template>

<script>

import appHeaderTabs from '@/components/Header/headerTabs'
import appBar from '@/components/Header/headerBar'
import appFooter from '@/components/Footer/appFooter'
import appSideBar from '@/components/SideBar/sideBar'
import appSlider from '@/components/Slider/Slider'
import appTabs from '@/components/Header/Tabs'

export default {
  name: 'Home',
  components: {
    appHeaderTabs,
    appBar,
    appFooter,
    appSideBar,
    appSlider,
    appTabs
  }
}
</script>
