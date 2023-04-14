var app = Vue.createApp({
    data(){
        return{
            name: ""
        }
    },

    // Write methods like bellow
    methods: {
        handleKeyup(e){
            // to get input field value in the console
            // console.log(e.target.value);

            // to get keyboard event
            console.log(e);

            // to show something in the vue way
            this.name = e.target.value;
       },

       handleFormSubmit(e){
        console.log(e);
        // e.preventDefault();
       },

       handleCardEvent(e){
        // to get click event object
        // console.log(e);

        console.log('Card Click');
       },

       handleViewClick(e){
            // differentiate from "handleCardEvent" event using JS function
            // e.stopPropagation();

            console.log('View Click');
       }
    },
    
});


// Now we have to mount the created instance
app.mount('#app');