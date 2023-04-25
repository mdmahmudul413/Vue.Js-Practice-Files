var appOne = Vue.createApp({
    data(){
        return{
            name: "",
        }
    },
});

appOne.mount('#appOne');

var appTwo = Vue.createApp({
    data(){
        return{
            message: "Hello World!",
        }
    },

    template: '<h1>{{ message }}</h1>',
});

appTwo.mount('#appTwo');