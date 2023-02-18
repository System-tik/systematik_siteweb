<template>
    <div>
        <headers/>
        <Sections/>
        <footers/>
        <copyright/>
       
    </div>
</template>
<script>
import headers from '../component/headers.vue';
import navBar from '../component/navBar.vue';
import Sections from '../component/Sections.vue';
import footers from '../component/footers.vue';
import copyright from '../component/copyright.vue';

    export default {
        name : 'Home',
        components : {
            navBar,headers,Sections,footers,copyright
            
        },
    }
</script>