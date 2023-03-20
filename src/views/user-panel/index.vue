<template>
  <div class="app-container">
    <div>
      hell
    </div>
    <div class="avatar">
      <img :src="avatar" alt="avatar" />
    </div>
    <div class="name">hello {{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserPanel',
  computed: {
    avatar() {
      return this.$store.getters.avatar
    },
    name() {
      return this.$store.getters.name
    }
  }
}
</script>

<style>

</style>
