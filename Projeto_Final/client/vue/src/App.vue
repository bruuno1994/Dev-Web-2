<script setup>
import RegisterUser from './components/RegisterUser.vue';
import GetAllUser from './components/getAllUser.vue';
import UpdateUser from './components/UpdateUser.vue';
import DeleteUser from './components/DeleteUser.vue';

</script>

<template>

<RegisterUser></RegisterUser>
<GetAllUser></GetAllUser>
<UpdateUser></UpdateUser>
<DeleteUser></DeleteUser>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
