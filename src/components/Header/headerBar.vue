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
        <v-toolbar-title style="color: #424242">LOGO</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="#424242">mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="#424242">mdi-magnify</v-icon>
        </v-btn>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="#424242">mdi-dots-vertical</v-icon>
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
    background: #EBEBEB
    background: linear-gradient(0deg, #EBEBEB 0%, #FFFFFF 100%)
    background: -webkit-linear-gradient(0deg, #EBEBEB 0%, #FFFFFF 100%)
    background: -moz-linear-gradient(0deg, #EBEBEB 0%, #FFFFFF 100%)
    background: -o-linear-gradient(0deg, #EBEBEB 0%, #FFFFFF 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='EBEBEB', endColorstr='#FFFFFF',GradientType=1 )
</style>
