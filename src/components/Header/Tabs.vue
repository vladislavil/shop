<template>
  <v-tabs hide-slider active-class="active" grow centered class="borders flex-grow-0 mb-6">
    <v-container class="d-flex py-0">
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
</template>

<style lang="sass" scoped>
  .borders
    border-bottom: 1px solid #dedede
    border-top: 1px solid #dedede
  .active
    background: #7ab361
    background: linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    background: -webkit-linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    background: -moz-linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    background: -o-linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='7ab361', endColorstr='#92D774',GradientType=1 )
    color: #fff !important
</style>
