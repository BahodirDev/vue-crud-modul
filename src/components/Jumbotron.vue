<template>
    <div class="container bg-gold mt-2 mb-2 p-3 rounded">
        <div class="row">
            <div class="col-md-12 text">
                <h4>{{ title }}</h4>
                <div>
                    <p>{{ SubTitle  }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        SubTitle: {
            type: String,
            default: 'Demo App'
        },
        title: {
            type: String,
            default: 'VueJS CRUD Modul'
        }
    }
}
</script>
<style scoped>
.bg-gold {
    background: gold;
}

.text {
    text-align: center;
    /* display: flex;
    justify-content: center; */
    /* align-items: center; */
    color: rgb(0, 0, 0);
}
</style>