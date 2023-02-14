<template>
    <Jumbotron title="Form page" SubTitle="You can add something new" />
    <div class="row">
        <div class="col-md-12 offset-12 d-flex justify-content-center">
            <form class="form w-50 mt-3">
                <input type="text" class="form-control p-3 mt-2" :value="name" @input="name = $event.target.value"
                    placeholder="Name">
                <input type="number" class="form-control p-3 mt-2" :value="cost" @input="cost = $event.target.value"
                    placeholder="Cost">
                <input type="text" class="form-control p-3 mt-2" :value="address" @input="address = $event.target.value"
                    placeholder="Address">
                <button type="submit" @click="hanleSubmit" class="btn btn-outline-primary mt-2">ADD</button>
                <button type="submit" @click="backRoute" class="btn btn-outline-warning mt-2 mx-2">BACK</button>
            </form>
        </div>
    </div>
</template>
<script>
import Jumbotron from '../components/Jumbotron.vue';
import { postRequest } from '../http/useHttp'
export default {
    data() {
        return {
            name: "",
            cost: "",
            address: "",
        };
    },
    methods: {
        async hanleSubmit(e) {
            e.preventDefault();
            if (!this.address || !this.name || !this.cost) {
                return window.alert("YOU SHOULD FILL ALL FIELDS");
            }
            let data = await postRequest("posts.json", {
                id: Date.now(),
                product_type_id: Date.now() * (10 + Date.now()),
                name_uz: this.name,
                cost: this.cost,
                address: this.address,
                created_date: Date.now()
            });
            this.$router.push('/');
        },
        backRoute(e) {
            console.log('sa;om');
            e.preventDefault(),
                this.$router.push('/')
        }
    },
    components: { Jumbotron }
}
</script>
<style>

</style>