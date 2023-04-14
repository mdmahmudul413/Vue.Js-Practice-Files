var app = Vue.createApp({
    data(){
        return {
            num: "",
            result: ""
        }
    },

    // Write methods like bellow
    methods: {

     //    when we use v-model, then we don't need handleInput
     //    handleInput(e){
     //        this.num = e.target.value; 

     //      //   To get input event
     //      console.log(e);
     //   },

       getDouble(){
            this.result = 2 * this.num;
       },

       getSquare(){
            this.result = this.num * this.num;
       },

       addTen(){
            this.result = this.num + 10;
       },

       reset(){
            this.num = "",
            this.result = ""
       }
    },
    
});


// Now we have to mount the created instance
app.mount('#app');