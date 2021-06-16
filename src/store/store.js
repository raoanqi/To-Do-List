import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


const vuexLocal = new VuexPersistence(({
    storage: window.localStorage
}))

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        addItemMutation(state, val) {
            state.list.push(val)
        },
        doneMutation(state, id) {
            state.list.find(item => item.id === id).done = true
        },
        removeMutation(state, id) {
            let targetIndex = state.list.findIndex(item => item.id === id)
            state.list.splice(targetIndex, 1)
        },
        cancelDone(state, id) {
            state.list.find(item => item.id === id).done = false
        },
        clearAll(state) {
            state.list = []
        }
    },
    getters: {
        unDoneList(state) {
            return state.list.filter(item => !item.done)
        },
        doneList(state) {
            return state.list.filter(item => item.done)
        },
        currentMaxId(state) {
            let temp = Math.max(...state.list.map(item => item.id))
            return temp === -Infinity ? -1 : temp
        }
    },
    plugins: [vuexLocal.plugin]
})