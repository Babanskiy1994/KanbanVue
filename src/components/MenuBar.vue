<template>
  <div class="menubar">
    <div class="btn-group" role="group" aria-label="Меню">
      <router-link to="/board" :class="buttonClass('/board')">Доска</router-link>
      <router-link to="/backlog" :class="buttonClass('/backlog')">Задачи</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuBar',
    methods: {
      buttonClass(path) {
        return {
          btn: true,
          'btn-primary': this.$route.path === path,
          'btn-secondary': this.$route.path !== path
        };
      }
    }
  };
</script>

<style>
  .menubar {
    margin-bottom: 16px;
  }
</style>