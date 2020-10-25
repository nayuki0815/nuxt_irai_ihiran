import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4caf50",
        secondary: "#8bc34a",
        accent: "#cddc39",
        error: "#ffeb3b",
        warning: "#ffc107",
        info: "#ff5722",
        success: "#795548",
      },
    },
  },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});



