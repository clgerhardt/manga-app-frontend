import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import chapters from "./modules/chapters";

export default new Vuex.Store({
    modules: {
        chapters
    }
});