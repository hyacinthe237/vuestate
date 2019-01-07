import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,

    state: {
        title: 'My First App VueX',
        links: [],
        link: {}
    },

    mutations: {
        SET_LINK (state, payload) {
            state.link = payload
        },

        SET_LINKS (state, payload) {
            state.links = payload
        },

        SET_TITLE (state, payload) {
            state.title = payload
        },

        ADD_LINK (state, link) {
            state.links.push(link)
        },

        REMOVE_LINK (state, link) {
            state.links.splice(link, 1)
        },

        REMOVE_ALL (state) {
            state.links = []
        }
    },

    actions: {
        getLinks ({ commit }) {
            const links = this.store.get()
            commit('SET_LINKS', links)
        },

        getLink ({ commit }, id) {
            const link = this.store.find(id)
            commit('SET_LINK', link)
        },

        removeLink (context, link) {
            context.commit("REMOVE_LINK", link)
        },

        removeAll ({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('REMOVE_ALL')
                    resolve()
                }, 1500)
            })
        }
    },
    
    getters: {
        getLinks: state => state.links,
        getLink: state => state.link,
        getTitle: state => state.title
    }
})
