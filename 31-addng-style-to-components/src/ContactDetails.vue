<template>
    <div class="container">
        <h1>Contact Details</h1>
        <p><strong>Name:</strong>{{ name }}</p>
        <p><strong>Website:</strong>www.rimonbd.com</p>
        <p><strong>Address:</strong>Dhaka, Bangladesh</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'Mamunur Rashid',
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