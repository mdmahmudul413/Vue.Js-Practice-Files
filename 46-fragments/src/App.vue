<template>
    <header>
        <h2>{{ msg }}</h2>
    </header>
    <div class="container">
        <the-comment
            v-model="myComment"
            buttonText="Continue"
            foo="bar"
            class="shadowed"
            placeholder="Enter your comment..."

            @continueClick="handleContinueClick"
        ></the-comment>

        <br><br><br>
        <button @click="showNotification">Show Notification</button>
 
        <the-dialog heading="Are you sure?" v-if="showDialog">
            <p>Are you really want to comment?</p>
            <br>
            <button @click="showDialog = false">Yes</button>
            <button @click="showDialog = false">No</button>
        </the-dialog>

        <the-notification v-for="(n, i) in notifications" :key="i" :text="n"></the-notification>
    </div>
</template>

<script>
import TheComment from "./TheComment.vue";
import TheDialog from "./TheDialog.vue";
import TheNotification from "./TheNotification.vue";
export default {
    data() {
        return {
            msg: "Welcome to vue js",
            myComment: "",
            showDialog: false,
            notifications: [],
        };
    },
    components: {
        TheComment, TheDialog, TheNotification
    },
    methods: {
        handleContinueClick(){
            this.showDialog = true;
        },

        showNotification(){
            this.notifications.push("You have a new notification");
            setTimeout(() => {
                this.notifications.shift();
            }, 2222);
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
