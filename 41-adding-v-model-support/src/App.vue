<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <div>
            <p>Rating: {{ myRating }}</p>
            <the-rating v-model="myRating"></the-rating>
        </div>
    </div>
</template>

<script>
import TheRating from "./TheRating.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            myRating: 3,
        };
    },
    components: {
        TheRating,
    },
    methods: {

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
</style>
