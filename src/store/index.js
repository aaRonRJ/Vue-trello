import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const debug = process.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    state,
    getters,
    actions,
    mutations
});
