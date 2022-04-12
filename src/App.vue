<template>
    <header-component/>

    <router-view></router-view>

    <auth-component/>

    <player-component/>

</template>


<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import AuthComponent from '@/components/AuthComponent';
  import PlayerComponent from '@/components/PlayerComponent';

  export default {
    name: 'App',
    components: {
      PlayerComponent,
      AuthComponent,
      HeaderComponent,
    },
    created() {
      this.$store.dispatch('init_login');
    }
  };
</script>
