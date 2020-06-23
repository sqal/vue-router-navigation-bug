<template>
  <div>
    <h1>User {{ $route.params.id }} page</h1>
  </div>
</template>

<script>
  export default {
    name: 'User',
    beforeMount() {
      document.title = `User ${this.$route.params.id}`
    }
  }
</script>
