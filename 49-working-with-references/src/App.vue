<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <input
            type="text"
            placeholder="Enter Your Name"
            v-model="name"
            ref="nameInput"
        />
        <the-comment
            v-model="comment"
            placeholder="Enter Comment...."
        ></the-comment>
    </div>
</template>

<script>
import TheComment from "./TheComment.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            name: "",
            comment: "",
        };
    },
    components: {
        TheComment,
    },
    mounted() {
        console.log(this.$refs);
    },

    provide() {
        return {
            name: this.name,
            websiteAddress: this.website,
            address: this.address,
        };
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

.tab {
}

.tab__content {
}

.tab__menu {
    display: flex;
}

.tab__menu-item {
    padding: 6px 15px;
    background-color: #dbdbdb;
    cursor: pointer;
}

.tab__menu-item--active {
    color: #fff;
    background-color: rgb(27, 104, 192);
}

input {
    padding: 5px 11px;
    margin-bottom: 11px;
}
</style>
