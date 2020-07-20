import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index.vue";

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': Index
    }
});
