<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <!-- we can use anyone which we like -->
        <contact-details name="Mahmudul Islam" address="Taltola, Bangladesh"></contact-details>
        <ContactDetails name="Mahadi" address="Dhaka, Bangladesh"/>
        <!-- Showing data from array object using v-for loop -->
        <ContactDetails v-for="contact in contacts" :key="contact.name" :name="contact.name" :websiteAddress="contact.website" :address="contact.address"/>
    </div>
</template>

<script>
import ContactDetails from './ContactDetails.vue'
export default {
    data(){
        return{
            msg: 'Welcome to vue js',
            contacts: [
                {name: 'Sajib', website: 'sajib.abcd', address: 'Japan'},
                {name: 'Hasan', website: 'hasan.abcd', address: 'Singapur'},
                {name: 'Antik', website: 'antik.abcd', address: 'Nepal'},
            ]
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