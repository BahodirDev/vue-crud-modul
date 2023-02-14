<template>
    <div class="madal_cart" v-if="isOpen" @click="$emit('toggle')">
        <div class="madal_cart_place" @click="$event.stopPropagation()">
            <form class="form w-100 mt-3">
                <input type="text" class="form-control p-2 mt-2" :value="name = updatingObject?.name_uz" @input="name = $event.target.value"
                    placeholder="Name">
                <input type="number" class="form-control p-2 mt-2" :value="cost = updatingObject?.cost" @input="cost = $event.target.value"
                    placeholder="Cost">
                <input type="text" class="form-control p-2 mt-2" :value="address = updatingObject?.address" @input="address = $event.target.value"
                    placeholder="Address">
                <button type="submit"  class="btn btn-outline-primary mt-2" @click="handleUpdate">UPDATE</button>
            </form>
        </div>
    </div>
</template>
<script>
import { getRequestById, putRequestById } from '../http/useHttp'
export default {
    data() {
        return {
            name: "",
            cost: "",
            address: "",
        }
    },

    methods: {
       async handleUpdate(e) {
            e.preventDefault();
            let res = await putRequestById('posts', this.updatingObject._id, {...this.updatingObject,name_uz: this.name ? this.name : this.updatingObject.name_uz, cost: this.cost ? this.cost : this.updatingObject.cost, address:this.address ? this.address : this.updatingObject.address});
            this.$store.commit("update",{id:this.updatingObject._id,data:res});
            this.$store.commit('close');      
        }
    },

    computed:{
        updatingObject(){
            return this.$store.state.posts.updatingObject;
        },
        isOpen(){
            return this.$store.state.isOpen.isOpen;
        }
    }
}
</script>
<style scoped>
.madal_cart {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}

.madal_cart_place {
    width: 50%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 10px;
    border-radius: 12px;
}
</style>