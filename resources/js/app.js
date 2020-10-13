import VueRouter from "vue-router";
import router from "./routes";
import Vuex from "vuex";
import Index from "./Index.vue";
import moment from "moment";

import StarRating from "./shared/components/StarRating.vue";
import FatalError from "./shared/components/FatalError.vue";
import Success from "./shared/components/Success.vue";
import ValidationErrors from "./shared/components/ValidationErrors.vue";
import storeDefinition from "./store";

require("./bootstrap");

window.Vue = require("vue");
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const store = new Vuex.Store(storeDefinition);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        index: Index
    },
    beforeCreate() {
        store.dispatch('loadStoredState');
    }
});
