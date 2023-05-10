<template>
    <div class="container">
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

<style>
    .container{
        margin: 28px;
        padding: 28px;
        border: 2px solid;
        color: green;
    }
</style>