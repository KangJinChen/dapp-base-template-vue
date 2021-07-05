<template>
  <span>
    <v-navigation-drawer
        app
        v-model="drawer"
        class="bg2"
        disable-resize-watcher
    >
      <drawer></drawer>
    </v-navigation-drawer>
    <v-app-bar class="bg2">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
        <v-img
            alt="Vuetify Logo"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            :src="require('../assets/logo.svg')"
            transition="scale-transition"
            width="40"
        />

        <v-app-bar-title class="shrink mt-1">
            {{ appTitle }}
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn outlined class="ma-2" color="pink accent-2">Login</v-btn>
    </v-app-bar>
  </span>
</template>

<script>
import Drawer from './Drawer.vue';
export default {
  components: { Drawer },
    name: 'AppBar',
    data() {
        return {
            appTitle: 'MyApp',
            drawer: false
        };
    },
    beforeDestroy () {
      if (typeof window === 'undefined') return

      window.removeEventListener('resize', this.onResize, { passive: true })
    },
    mounted () {
      this.onResize()

      window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
      onResize () {
        this.drawer = this.drawer && window.innerWidth < 960
      },
    },
};
</script>
