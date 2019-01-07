import Vue from 'vue'
import Vuex from 'vuex'
import LinksModule from './modules/links'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },

    modules: {
        links: LinksModule
    }
})
