<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <div class="tab">
            <div class="tab__menu">
                <div
                    v-for="tab in tabs"
                    :key="tab"
                    class="tab__menu-item"
                    :class="{ 'tab__menu-item--active': activeTab === tab }"
                    @click="activeTab = tab"
                >
                    {{ tab }}
                </div>                    
            </div>
            <div class="tab__content">
                <br>
                <!-- General way of rendering tab component -->
                <!-- <login v-if="activeTab === 'Login'"></login>
                <register v-if="activeTab === 'Register'"></register>
                <contactDetails v-if="activeTab === 'ContactDetails'" name="Mahmud" address="Taltola, Dhaka"></contactDetails> -->

                <!-- Using Dynamic Component for rendering tab component -->
                <keep-alive>
                    <component :is="activeTab"></component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
import Login from "./LoginView.vue";
import Register from "./RegisterView.vue";
import ContactDetails from "./ContactDetails.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            tabs: ["Login", "Register", "ContactDetails"],
            activeTab: "Login",
            name: "Mamunur Rashid",
            website: "http://youtube.com",
            address: "Dhaka",
        };
    },
    components: {
        Login,
        Register,
        ContactDetails,
    },
    
    // this is not the best practice
    // provide: {},
    provide(){
        return {
            name: this.name,
            websiteAddress: this.website,
            address: this.address,
        }
    }
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
