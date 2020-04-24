<template>
  <div>
    <v-container>
      <app-product :info="$route.params"></app-product>
    </v-container>
  </div>
</template>

<script>
import appProduct from '@/components/Product/productInfo'
export default {
  components: {
    appProduct
  },
  methods: {
    myFunc () {
      const route = this.$route.params
      return route
    }
  }
}
</script>
