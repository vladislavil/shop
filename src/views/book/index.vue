<template>
  <div>
    Book
    {{ $route.params }}
  </div>
</template>

<script>
export default {
  methods: {
    myFunc () {
      const route = this.$route.params
      return route
    }
  }
}
</script>
