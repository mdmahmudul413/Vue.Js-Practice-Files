<template>
    <div class="Contact-Details">
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