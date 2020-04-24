<template>
  <div>
    <v-card>
      <v-row>
        <v-col cols="4" class="mx-6">
          <img :src="info.img" />
        </v-col>
        <v-col cols="7">
          <div>
            <h1 class="title">
              {{info.title}}
            </h1>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae minus voluptatum odio, obcaecati ab necessitatibus, possimus quaerat, illo natus placeat quidem eligendi porro nulla. Dolore natus incidunt mollitia numquam iusto!
            </p>
            <v-card class="pa-5">
              <div class="d-flex justify-space-between align-center mb-5">
                <h1>Our price {{info.price}}</h1>
                <v-btn class="button">Add to cart</v-btn>
              </div>
              <div class="pt-2" style="border-top: 1px solid #dedede">
                <p><v-icon>mdi-lock</v-icon>State Success Sopping</p>
                <div class="icons d-flex">
                  <a href="#" class="icon">
                    <img src="@/static/pay.png" alt="">
                  </a>
                  <a href="#" class="icon">
                    <img src="@/static/mastercard.png" alt="">
                  </a>
                  <a href="#" class="icon">
                    <img src="@/static/visa.png" alt="">
                  </a>
                  <a href="#" class="icon">
                    <img src="@/static/american.png" alt="">
                  </a>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="sass" scoped>
  .icon
    display: block
    margin-right: 10px

    &:last-child
      margin-right: 0

  .button
    background: #7ab361
    background: linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    background: -webkit-linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    background: -moz-linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    background: -o-linear-gradient(0deg, #7ab361 0%, #92D774 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='7ab361', endColorstr='#92D774',GradientType=1 )
    color: #fff !important
    text-transform: capitalize
</style>
