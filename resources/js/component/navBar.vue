<template>
    <div class="bg-blue-500 font-bold text-white text-2xl flex gap-4 justify-center">
        <router-link to="/">Home</router-link>
        <router-link to="/Service">Service</router-link>
        <router-link to="/Realisation">Realisation</router-link>
        <router-link to="/Appropos">Appropos</router-link>
    </div>
    <router-view/>
</template>
<script>
    export default {
        name : 'navBar',
    }
</script>