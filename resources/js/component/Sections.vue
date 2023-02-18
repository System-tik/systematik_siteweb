<template>
    <div>
        Section
        <cardRealisation/>
        <cardService/>
    </div>
</template>
<script>
    import cardService from '../component/cardService.vue';
    import cardRealisation from '../component/cardRealisation.vue'
    export default {
        name : 'Section',
        components : {
            cardRealisation,cardService
        }
    }
</script>