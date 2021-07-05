import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        bg1: '#111827',
        bg2: '#1f2937',
      },
    },
    dark: true
  },
});
