var app = Vue.createApp({
    data(){
        return{
            count: 0
        }
    },

    // Write methods like bellow
    methods: {
        increment(value){
            this.count = this.count + value;
        },

        decrement(value){
            this.count = this.count - value;
        },

        test(e){
            console.log(e);
        },

        practice(e, value){
            console.log(e);
            this.count = this.count + value;
        }
    },
    
});


// Now we have to mount the created instance
app.mount('#app');