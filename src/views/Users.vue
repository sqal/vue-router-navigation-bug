<template>
  <div>
    <h1>Users page</h1>
    <router-link :to="{ name: 'user', params: { id: 1 } }">
      Go to /users/1
    </router-link>
    <br>
    <br>
    <router-link :to="{ name: 'user', params: { id: 2 } }">
      Go to /users/2
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Users',
  }
</script>
