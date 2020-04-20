<template>
  <div class="ml-4" style="width: 100%">
    <v-tabs>
      <v-container d-flex flex-row pa-0>
        <v-tab style="text-transform: capitalize">
          Option
        </v-tab>
        <v-tab style="text-transform: capitalize">
          Another Selection
        </v-tab>
        <v-tab style="text-transform: capitalize">
          Items
        </v-tab>
        <v-tab style="text-transform: capitalize">
          Another Screen
        </v-tab>
      </v-container>
    </v-tabs>
    <v-card>
      <app-card></app-card>
    </v-card>
  </div>
</template>

<script>
import appCard from '@/components/Card/contentCard'
export default {
  components: {
    appCard
  }
}
</script>
