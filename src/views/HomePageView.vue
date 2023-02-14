<template>
    <Jumbotron />
    <div class="row ">
        <div class="col-md-12 bg-light p-3 mt-3 rounded border banner">
            <h3 class="text-center">POSTS LIST </h3>
            <RouterLink :to="{ name: 'form' }">
                <span class="add_icon">
                    <i class="fa-light fa-plus"></i>
                </span>
            </RouterLink>
        </div>
        <div class="row posts">
            <div class="col-md-12 d-flex justify-content-between p-3 align-items-center shadow my-3 "
                v-for="post in posts" v-if="posts.length > 0">
                <p>Title: {{ post.name_uz }}</p>
                <b>Cost: {{ post.cost }}</b>
                <p class="text-mute">Address: {{ post.address }}</p>
                <p class="text-mute">Published: {{ convertTime(post.created_date) }}</p>
                <div>
                    <i class="fa-solid fa-trash pointer icons" @click="deleteFromList(post._id)"></i>
                    <i class="fa-regular fa-pen-to-square pointer icons" @click="getById(post._id)"></i>
                </div>
            </div>

            <div class="col-md-12 d-flex justify-content-center align-items-center text-center shadow my-3 " v-else>
                <div>
                    <p class="text-center">Ma`lumotlar topilmadi</p>

                </div>
            </div>

        </div>
    </div>
    <!-- Modal vuiew -->
    <Modal @toggle="this.$store.commit('close')" />
</template>
<script>
import { getRequest, deleteRequest } from '../http/useHttp';
import { converterToArray } from '../actions/customHandlers';
import Modal from '../components/Modal.vue';
import Jumbotron from '../components/Jumbotron.vue';
import moment from 'moment';

export default {

    methods: {
        convertTime(date){
          return  moment().fromNow(date);
        },
        getById(id) {
            this.$store.dispatch('deliverObject', id)
            this.$store.dispatch('open')
        },
        async getPosts() {
            this.$store.dispatch("deliverPosts", converterToArray(await getRequest("posts.json")))
        },
        async deleteFromList(id) {
            if (window.confirm("Are you sure to delete?")) {
                this.$store.commit('delete', id)
                await deleteRequest("posts", id);
            }
        }
    },
    mounted() {
        this.getPosts();
    },

    computed: {
        posts() {
            return this.$store.state.posts.posts;
        },


    },
    components: { Modal, Jumbotron }
}

</script>
<style scoped>
.add_icon {
    position: absolute;
    right: 2rem;
    top: 5%;
    font-size: 35px;
    color: cadetblue;
    cursor: pointer;
}

.banner {
    position: relative;
    height: 20vh;
}

.posts {
    height: 50vh;
    overflow-y: scroll;
}

.pointer {
    cursor: pointer;
}

.icons {
    font-size: 22px;
    margin-right: 10px;
    margin-left: 10px;
}

.icons:hover {
    color: teal;
}
</style>