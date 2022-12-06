import Vue from 'vue';
import 'material-design-icons-iconfont'
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
});
