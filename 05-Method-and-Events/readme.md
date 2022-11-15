## **05 Method and Events**

    1. In Vue JS we write method in methods: {...}

    2. Process to show methods value in the Dom,

        var app = Vue.createApp({
            
            // Write methods like bellow
            methods: {
                getCurrentTime(){
                    let ct = new Date();
                    return ct;
                }
            },
        });

        From the DOM,

            <div id="app">
                <h3>Current time: {{getCurrentTime()}}</h3>
            </div>

    3. Event Binding: Process to creating an event,

        In the app.js,

            var app = Vue.createApp({
                data(){
                    return{
                        count: 0
                    }
                },

                // Write methods like bellow
                methods: {
                    increment(){
                        this.count = this.count + 1;
                    },

                    decrement(){
                        this.count = this.count - 1;
                    }
                },
                
            });

        In the Dom,

            <button v-on:click="decrement">Decrease</button>

    4. event binding shorthand: 

       <button @click="increment">Increase</button>
       <button @click="decrement">Decrease</button>
    
    5. Bind event directly to write javascript code inside DOM,

        <button @click="count++">Increase</button>
        <button @click="count--">Decrease</button>
                