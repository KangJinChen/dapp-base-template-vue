<template>
    <div>
      <v-app-bar class="bg2">
        <v-img
          alt="Vuetify Logo"
          class="shrink mt-1"
          contain
          :src="require('../assets/logo.svg')"
          transition="scale-transition"
          width="40"
        />
        <v-card-text class="shrink mt-1">MyApp</v-card-text>
      </v-app-bar>

      <navigation class="mt-3 ml-3 mr-3 bg1"></navigation>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';
export default {
  components: { Navigation },
  name: 'Drawer',
};
</script>
