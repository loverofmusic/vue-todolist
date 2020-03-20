import Vue from 'vue';
import App from './app.vue'

// import './assets/styles/test.css';
// import './assets/styles/test-stylus.styl';
// import './assets/images/bg_bottom.jpg'

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)//渲染组件
}).$mount(root)