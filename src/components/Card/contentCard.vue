<template>
  <div>
    <v-row class="px-6">
      <v-col class="pa-7" cols="3" v-for="num in 20" :key='num'>
        <router-link :to="/book/ + num" :data="num">
          <v-card class="d-flex justify-center flex-grow-0 pa-1 ma-auto mb-2">
            <img src="@/assets/book.jpg" alt="">
          </v-card>
          <h4 class="title">Title</h4>
          <div class="price">{{num * 2}}$</div>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="sass" scoped>
  img
    max-width: 100%

  .title
    text-align: center

  .price
    text-align: center
</style>
