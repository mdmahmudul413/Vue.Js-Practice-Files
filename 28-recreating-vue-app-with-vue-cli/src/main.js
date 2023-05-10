// After creating App.vue
import { createApp } from 'vue'
import App from './App.vue'

// If we want to check the creation of internal render function
console.log(App);

var app = createApp(App);
app.mount('#app');


// when we don't create app.vue file
// import { createApp, h } from 'vue'

// var app = createApp({
//     data(){
//         return{
//             msg: 'Welcome to vue js',
//         }
//     },
    
//     // output: <h1>Welcome to vue js</h1>
//     // render() {
//     //     return h("h1", {}, this.msg);
//     // },

//     // output: <div><h1>Welcome to vue js</h1></div>
//     render() {
//         return h("div", {}, [
//             h("h1", {}, this.msg)  
//         ]);
//     },
// });

// app.mount('#app');
