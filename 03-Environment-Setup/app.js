// create a instacce of the global object
// we have to pass a json value inside the instance
var app = Vue.createApp({
    // writting technique 1
    // data: function(){
    //     return{
    //         msg: "Welcome to Vue JS"
    //     }
    // }
 
    // writting technique 2
    data(){
        return{
            msg: "Welcome to Vue JS"
        }
    }
});

// Now we have to mount the created instance
app.mount('#app');