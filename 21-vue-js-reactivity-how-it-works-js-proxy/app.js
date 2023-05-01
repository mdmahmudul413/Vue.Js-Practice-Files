// VUE APP
// var app = Vue.createApp({
//     data(){
//         return{
//             name: "",
//         }
//     },

//     methods: {
//         crear(){
//             this.name = '';
//         }
//     },
// });

// app.mount('#app');

// VANILLA JS

var data = {
    name: "",
}

var handler = {
    set(target, key, value){
        console.log(target);
        console.log(key);
        console.log(value);

        if(key == 'name'){
            var output = document.querySelector('#output');
            output.innerHTML = value;
        }
    }
}

var proxyData = new Proxy(data, handler);

proxyData.name = "Mamun";