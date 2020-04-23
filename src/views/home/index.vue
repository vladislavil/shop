<template>
  <div>
    <div class="slider mb-6">
      <v-container class="py-0">
        <v-row>
          <app-slider></app-slider>
          <app-top-card></app-top-card>
        </v-row>
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

import appFooter from '@/components/Footer/appFooter'
import appSideBar from '@/components/SideBar/sideBar'
import appSlider from '@/components/Slider/Slider'
import appContentTabs from '@/components/Content/contentTabs'
import appTopCard from '@/components/Card/topCard'

export default {
  name: 'Home',
  components: {
    appFooter,
    appSideBar,
    appSlider,
    appContentTabs,
    appTopCard
  }
}
</script>
