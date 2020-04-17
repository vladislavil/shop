<template>
  <div>
    <v-app-bar
      class="bg-bar"
      height="110px"
      dense
      dark
      flat
    >
      <v-container d-flex flex-row>
        <v-toolbar-title>LOGO</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>
  </div>
</template>

<style lang="sass" scoped>
  .bg-bar
    background: rgba(254,254,254,1)
    background: -moz-linear-gradient(top, rgba(254,254,254,1) 0%, rgba(219,219,219,1) 86%, rgba(209,209,209,1) 100%)
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(254,254,254,1)), color-stop(86%, rgba(219,219,219,1)), color-stop(100%, rgba(209,209,209,1)))
    background: -webkit-linear-gradient(top, rgba(254,254,254,1) 0%, rgba(219,219,219,1) 86%, rgba(209,209,209,1) 100%)
    background: -o-linear-gradient(top, rgba(254,254,254,1) 0%, rgba(219,219,219,1) 86%, rgba(209,209,209,1) 100%)
    background: -ms-linear-gradient(top, rgba(254,254,254,1) 0%, rgba(219,219,219,1) 86%, rgba(209,209,209,1) 100%)
    background: linear-gradient(to bottom, rgba(254,254,254,1) 0%, rgba(219,219,219,1) 86%, rgba(209,209,209,1) 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefefe', endColorstr='#d1d1d1', GradientType=0 )
</style>
