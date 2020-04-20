<template>
  <div>
    <app-header-tabs></app-header-tabs>
    <app-bar></app-bar>
    <div class="slider mb-6">
      <v-container class="pt-0 pb-0">
        <app-tabs></app-tabs>
        <div class="d-flex">
          <app-slider class="mr-2"></app-slider>
          <app-top-card></app-top-card>
        </div>
      </v-container>
    </div>
    <v-container class="d-flex flex-row align-stretch">
      <app-side-bar></app-side-bar>
      <app-content-tabs></app-content-tabs>
    </v-container>
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
import appContentTabs from '@/components/Content/contentTabs'
import appTopCard from '@/components/Card/topCard'

export default {
  name: 'Home',
  components: {
    appHeaderTabs,
    appBar,
    appFooter,
    appSideBar,
    appSlider,
    appTabs,
    appContentTabs,
    appTopCard
  }
}
</script>
