const state = {
    isOpen: false
}

const mutations = {
    close(state) {
        state.isOpen = false;
    },
    open(state) {
        state.isOpen = true;
    },
},
actions={
    close(context) {
        context.commit('close');
    },
    open(context) {
        context.commit('open');
    },
}

export default {state,actions,mutations}