<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <p>My Comment: {{ myComment }}</p>
        <button @click="hide = true">Hide</button>
        <the-comment
            v-model="myComment"
            buttonText="Continue"
            foo="bar"
            class="shadowed"
            placeholder="Enter your comment..."
            v-if="!hide"

            @click="handleClicked"
        ></the-comment>
        <br />
        <hr />
        <br />
        <p>
            Name: {{ nameOnCard }} <br />
            Card Number: {{ cardNumber }} <br />
            Expiry: {{ expiry }} <br />
            CVV: {{ cvv }}
        </p>
    </div>
</template>

<script>
import TheComment from "./TheComment.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            myComment: "",
            hide: false,
        };
    },
    components: {
        TheComment,
    },
    methods: {
        handleClicked(){
            console.log('click event fired....!!');
        }
    },

    // beforeCreate(){
    //     console.log('Before Created')
    //     // console.log(this.msg)
    // },
    
    // created(){
    //     console.log('Created')
    //     // console.log(this.msg)
    // },
    
    // beforeMount(){
    //     console.log('Before Mount')
    //     // console.log(this.msg)
    // },
    
    // mounted(){
    //     console.log('Mounted')
    //     // console.log(this.msg)
    // },

    // beforeUpdate(){
    //     console.log('Before Update')
    //     // console.log(this.msg)
    // },

    // updated(){
    //     console.log('Updated')
    //     // console.log(this.msg)
    // }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    line-height: 1.8;
}

ul {
    margin-left: 22px;
}

header {
    background-color: #1f2c46;
    color: #41b883;
    font-size: 22px;
    padding: 22px;
}

header h2 {
    text-align: center;
}

button {
    margin: 5px;
    padding: 5px 11px;
    cursor: pointer;
}

.container {
    margin: 28px;
    padding: 28px;
}
.shadowed {
    box-shadow: 0 0 3px 2px #111;
}
</style>
