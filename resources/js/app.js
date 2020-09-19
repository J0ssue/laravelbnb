import VueRouter from "vue-router";
import router from "./routes";
import Index from "./Index.vue";
import moment from "moment";

import StarRating from "./shared/components/StarRating.vue";
import FatalError from "./shared/components/FatalError.vue";

require("./bootstrap");

window.Vue = require("vue");
Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index
    }
});
