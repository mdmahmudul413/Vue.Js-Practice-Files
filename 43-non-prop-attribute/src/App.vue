<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <p>My Comment: {{ myComment }}</p>
        <the-comment
            v-model="myComment"
            buttonText="Continue"
            foo="bar"
            class="shadowed"
            placeholder="Enter your comment..."

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
