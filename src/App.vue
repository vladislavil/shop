<template>
  <v-app>
    <app-header-tabs></app-header-tabs>
    <app-bar></app-bar>
    <app-tabs></app-tabs>
    <router-view></router-view>
  </v-app>
</template>

<script>

import appHeaderTabs from '@/components/Header/headerTabs'
import appBar from '@/components/Header/headerBar'
import appTabs from '@/components/Header/Tabs'

export default {
  name: 'App',

  components: {
    appHeaderTabs,
    appBar,
    appTabs
  },

  data: () => ({
    //
  })
}
</script>
