// create a instacce of the global object
// we have to pass a json value inside the instance
var app = Vue.createApp({
    data(){
        return{
            tutorialInfo: {
                name: "Vue JS 3",
                githubLink: "http://github.com/mdmahmudul413"
            },
            htmlCode: '<a href="https://www.youtube.com/">Youtube</a>'
        }
    }
});

// Now we have to mount the created instance
app.mount('#app');