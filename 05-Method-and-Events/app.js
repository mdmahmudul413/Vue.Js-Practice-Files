var app = Vue.createApp({
    data(){
        return{
            count: 0
        }
    },

    // Write methods like bellow
    methods: {
        // getCurrentTime(){
        //     let ct = new Date();
        //     return ct;
        // }

        getCurrentTime(){
            return new Date();
        },

        increment(){
            this.count++;
        },

        decrement(){
            this.count--;
        }
    },
    
});


// Now we have to mount the created instance
app.mount('#app');