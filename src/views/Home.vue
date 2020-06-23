<template>
  <div>
    <h1>Home page</h1>
    <router-link :to="{ name: 'users' }">Go to /users</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
