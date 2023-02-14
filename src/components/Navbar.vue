<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid p-3">
            <RouterLink :to="{ name: 'home' }" class="navbar_text">
                <a class="navbar-brand " >VueJS</a>
            </RouterLink>

        </div>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
.navbar_text{
    text-decoration: none;
}
</style>