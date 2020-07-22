import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index.vue";
import moment from "moment";

require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);

Vue.filter('fromNow', value => moment(value).fromNow());

const app = new Vue({
    el: '#app',
    router,
    components: {
        'index': Index
    }
});
