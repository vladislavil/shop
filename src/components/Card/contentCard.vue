<template>
  <div>
    <v-row class="px-6">
      <v-col cols="3" v-for="(item, index) in items" :key='index'>
        <a href="#" @click.prevent="goBook(item)">
          <v-card class="d-flex justify-center flex-grow-0 pa-1 ma-auto mb-2">
            <img src="../../static/book.jpg" alt="">
          </v-card>
          <h4 class="title">{{item.title}}</h4>
          <div class="price">{{item.price}}</div>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          id: 1,
          title: 'Book1',
          price: '30$'
        },
        {
          id: 2,
          title: 'Book2',
          price: '33$'
        },
        {
          id: 3,
          title: 'Book3',
          price: '43$'
        },
        {
          id: 4,
          title: 'Book4',
          price: '39$'
        },
        {
          id: 5,
          title: 'Book5',
          price: '53$'
        },
        {
          id: 6,
          title: 'Book6',
          price: '30$'
        },
        {
          id: 7,
          title: 'Book7',
          price: '33$'
        },
        {
          id: 8,
          title: 'Book8',
          price: '43$'
        },
        {
          id: 9,
          title: 'Book9',
          price: '39$'
        },
        {
          id: 10,
          title: 'Book10',
          price: '53$'
        },
        {
          id: 11,
          title: 'Book11',
          price: '30$'
        },
        {
          id: 12,
          title: 'Book12',
          price: '33$'
        },
        {
          id: 13,
          title: 'Book13',
          price: '43$'
        },
        {
          id: 14,
          title: 'Book14',
          price: '39$'
        },
        {
          id: 15,
          title: 'Book15',
          price: '53$'
        },
        {
          id: 16,
          title: 'Book16',
          price: '30$'
        },
        {
          id: 17,
          title: 'Book17',
          price: '33$'
        },
        {
          id: 18,
          title: 'Book18',
          price: '43$'
        },
        {
          id: 19,
          title: 'Book19',
          price: '39$'
        },
        {
          id: 20,
          title: 'Book20',
          price: '53$'
        }
      ]
    }
  },
  methods: {
    goBook (item) {
      console.log(item)
      this.$router.push({ name: 'Book', params: { id: item.id, title: item.title, price: item.price, img: require('../../static/book.jpg') } })
    }
  }
}
</script>

<style lang="scss">
  $body-font-family: Arial, sans-serif;
  $grid-columns: 25 !important;

  img {
    max-width: 100%;
  }
  .title {
    text-align: center;
  }
  .price {
    text-align: center;
  }
</style>
