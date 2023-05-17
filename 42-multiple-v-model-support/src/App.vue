<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <h4>Credit Card Input</h4>
        <credit-card
            v-model:nameOnCard="nameOnCard"
            v-model:cardNumber="cardNumber"
            v-model:expiry="expiry"
            v-model:cvv="cvv"
        ></credit-card>
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
import CreditCard from "./CreditCard.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            nameOnCard: "Mr.",
            cardNumber: "",
            expiry: "",
            cvv: "",
        };
    },
    components: {
        CreditCard,
    },
    methods: {},
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
</style>
