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
    props: ['name', 'websiteAddress', 'address'],
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