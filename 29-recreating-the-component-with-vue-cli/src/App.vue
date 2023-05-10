<template>
    <div class="app-view">
        <h1>{{ msg }}</h1>
        <!-- we can use anyone which we like -->
        <contact-details></contact-details>
        <ContactDetails/>
    </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue'
export default {
    data(){
        return{
            msg: 'Welcome to vue js',
        }
    },
    components:{
        ContactDetails
    }
}
</script>

<style scoped>

</style>