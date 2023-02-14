const state = {
    posts: [],
    updatingObject: {},
}

const mutations = {
    deliverPosts(state, payload) {
        state.posts = payload;
    },
    deliverObject(state, payload) {
        state.updatingObject = state.posts.filter(s => s._id == payload)[0];
    },
    delete(state, payload) {
        state.posts = state.posts.filter(s => s._id != payload);
    },
    update(state, payload) {
        state.posts = state.posts.map((s) => {
            if (s._id == payload.id) {
                return {
                    ...s,
                    ...payload.data
                }
            } else {
                return s;
            }
        })
    }
}
// must write payload

const actions = {
    deliverPosts(context,payload){
        context.commit('deliverPosts',payload)
    },
    deliverObject(context,payload){
        context.commit('deliverObject',payload)
    },
    delete(context,payload){
        context.commit('delete',payload)
    },
    update(context,payload){
        context.commit('update',payload)
    },
}

export default {state,mutations,actions}