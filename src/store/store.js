import { createStore } from 'vuex';
import posts from '../modules/posts'
import isOpen from '../modules/isOpen'

const store = createStore({
    state:{},
    mutations:{},
    actions:{},
    modules:{posts,isOpen}
});

export default store;