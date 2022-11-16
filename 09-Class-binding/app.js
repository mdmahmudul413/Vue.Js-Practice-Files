var app = Vue.createApp({
    data(){
        return {
            activeClass: "red"
        }
    },

    // Write methods like bellow
    methods: {
          setClass(className){
               this.activeClass = className;
          }
   },
    
});


// Now we have to mount the created instance
app.mount('#app');