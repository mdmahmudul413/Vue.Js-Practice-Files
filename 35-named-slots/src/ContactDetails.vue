<template>
    <div class="container">
        <h1>Contact Details</h1>
        <p><strong>Name:</strong>{{ name }}</p>
        <p><strong>Website:</strong>{{ websiteAddress }}</p>
        <p><strong>Address:</strong>{{ address }}</p>
    </div>
</template>

<script>
export default {
    // simple validation
    // props: {
    //     name: String, 
    //     websiteAddress: String, 
    //     address: String
    // },

    // More specify
    props: {
        name: String, 
        address: {type: String, required: true}, 
        websiteAddress: {type: String, required: false, default: 'http://yourwebsite.com'},
        validator: function(){}
    },
    data(){
        return{

        }
    },
}
</script>

<style scoped>
    .container{
        margin: 28px;
        padding: 28px;
        border: 2px solid;
        color: red;
    }
</style>