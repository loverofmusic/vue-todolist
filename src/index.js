import Vue from 'vue'
import App from './app.vue'

// import './assets/styles/test.css';
// import './assets/styles/test-stylus.styl';
// import './assets/images/bg_bottom.jpg'
import './assets/styles/global.styl';

new Vue({
  render: h => h(App)
}).$mount("#root")