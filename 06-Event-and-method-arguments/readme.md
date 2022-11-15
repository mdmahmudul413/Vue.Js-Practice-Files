## **06 Event and method arguments**

    1. we can pass argument on an event,

        In app.js,
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
                    }
                },
            });

            In the Dom,

            <button @click="increment(2)">Increase 2</button>
            <button @click="decrement(2)">Decrease 2</button>
    
    2. How to get PointerEvent object,

        In the app.js,

        ➢ When we does not pass argument to the method,

            methods: {
                test(e){
                    console.log(e);
                }
            },

        In the DOM,
            <button @click="test">Get pointer event object</button>
        
        ➢ When we pass argument to the method,

        app.js, 

            methods: {
                test(e){
                    console.log(e);
                }
            },
        
        DOM,

            <button @click="test($event)">Get pointer event object</button>
