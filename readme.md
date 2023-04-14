## **03 Environment Setup**

    ⇨ Two types of Environment setup is available

        ➢ CDN : Control the part of HTML

            ⇨ Vue JS CDN gives us a global object name vue.global.js

            ⇨ create a instacce of the global object

            ⇨ pass a json object inside the instance

            ⇨ mount the created instance

            ⇨ populate the created inctance inside the DOM using double curly brace {{...}}

        ➢ CLI(Webpack) :  Control Entire Webpage event routing

## **04 Data and attribute binding**

    ➢ Data Binding (String interpolation) 

        Create a instacce of the global object,

            var app = Vue.createApp({
                data(){
                    return{
                        tutorialInfo: {
                            name: "Vue JS 3",
                            githubLink: "github.com/mdmahmudul413"
                        }
                    }
                }
            });

        Then from the dom,
            <h3>
                Welcome to {{ tutorialInfo.name }}
            </h3>

        This is called string interpolation

    
    ➢ Attribute Binding 

        ⇨ use "v-bind"

            <a v-bind:href="tutorialInfo.githubLink">GitHub</a>

        ⇨ use ":" (shortcut)

            <a :href="tutorialInfo.githubLink">GitHub</a>

          Note: In the attribute binding, we don't need to write string interpolation.

    ➢ To get an anchor tag output in the DOM

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

        Then from the dom,

            <p v-html="htmlCode"></p>

## **05 Method and Events**

    ➢ In Vue JS we write method in methods: {...}

    ➢ We can also show the value of methods in the Dom through String interpolation.

        var app = Vue.createApp({
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

    ➢ We can directly execute JS code in the Dom inside curly braces

    ➢ Event Binding

        In the app.js,

            var app = Vue.createApp({
                data(){
                    return{
                        count: 0
                    }
                },

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

    ➢ v-on:click="increment()" / v-on:click="increment" both allow

    ➢ event binding shorthand: @click="increment"

        <button @click="increment">Increase</button>
        <button @click="decrement">Decrease</button>

    ➢ Bind event directly to write javascript code inside DOM

        <button @click="count++">Increase</button>
        <button @click="count--">Decrease</button>

## **06 Event and method arguments**

    ➢ we can pass argument on an event

        In the Dom,

            <button @click="increment(2)">Increase 2</button>
            <button @click="decrement(2)">Decrease 2</button>

        In app.js,
        
            var app = Vue.createApp({
                data(){
                    return{
                        count: 0
                    }
                },

                methods: {
                    increment(value){
                        this.count = this.count + value;
                    },

                    decrement(value){
                        this.count = this.count - value;
                    }
                },
            });

    ➢ How to get PointerEvent object(click event object) without passing argument 

        In the DOM,

            <button @click="test">Get pointer event object</button>

        In the app.js,

            methods: {
                test(e){
                    console.log(e);
                }
            },

                
            
    ➢ When we pass argument to the method,

        In the DOM,

            <button @click="test($event)">Get pointer event object</button>        
            
        In the app.js,
            
            methods: {
                    test(e){
                        console.log(e);
                    }
                },

    ➢ When we pass event argument and a value argument togather ,

        In the DOM,

            <button @click="test($event, value)">Get pointer event object</button>        
            
        In the app.js,

            methods: {
                    test(e, value){
                        console.log(e);
                    }
                },
            
                

## **07 Event Modifiers**

    ➢ We have some default event(onkeyup, onkeydown, oninput) for input tag

        a. onkeyup: When we type something onKeyup event will fire.

    ➢ If we don't add action in the form, then it will submit in the same page where the form is situated

    ➢ To get form submit event

        Dom,

            <form @submit="handleFormSubmit">
                <h3>Fill the form</h3>
                <input type="text">
                <button>Submit</button>
            </form>
        
        App.js,

            handleFormSubmit(e){
                console.log(e);
                e.preventDefault();
            }

    ➢ Native keyboard event

        To get native keyboard event object,

            DOM,
                
                <input @keyup="handleKeyup" type="text">

            app.js,

                var app = Vue.createApp({
                        methods: {
                            handleKeyup(e){
                                console.log(e);

                                // to get input field value in the console
                                console.log(e.target.value);
                        }
                    },
                });

    ➢ Event Modifiers

        syntax,

            @event_name.event_modifiers="method_call"

            Example: @keyup.enter="handleKeyup"

    ➢ More Event Modifiers

        @keyup.enter="handleKeyup" for keyboard type and then enter
        
        @submit.prevent="handleFormSubmit" for e.preventDefault();
        
        @click.right="handleCardEvent" for right click 
        
        @click.left="handleCardEvent" for left click 
        
        @click.stop="handleViewClick" for e.stopPropagation();

    ➢ We can use click event on <div>
            
    ➢ Event Modifiers: @click.right="handleCardEvent" will work when we click on mouse right

    ➢ Differentiate two individual events() - e.stopPropagation()

    ➢ Event Modifiers: @click.stop="handleViewClick"

## **08 Two way data binding**

    ➢ Input Event Binding 
    
        <input type="text" @input="handleInput">

    ➢ For manually two way bindings use ":value='variable'" in the input field

    ➢ Manually two way data binding example

        Dom,

            <input :value="num" type="number" @input="handleInput">

            Note: In manually two way data binding we need both attribute binding and event binding.

        App.js,

            data(){
                return {
                    num: "",
                }
            },

            methods: {

                handleInput(e){
                    this.num = e.target.value;
                },
            },
            
    ➢ Two way data binding example using v-model,

        Dom,

            <input v-model="num" type="number">

            Note: We don't need attribute binding and event binding when we use v-model.

        App.js,

            data(){
                return {
                    num: "",
                }
            },

    ➢ To get input event

        Dom,

            <input type="number" @input="handleInput">

        App.js,

            handleInput(e){
                console.log(e);
            },

    ➢ When we bind a input field with v-model, it takes value as a string

    ➢ But if we want to take value as a number, we have to use event modifier

        <input v-model.number="num" type="number">

        other v-model modifiers,

            <input v-model.trim="num" type="number">
   
## **09 Class binding**

    ➢ To bind html element class in normal(attribute binding) way, use ":class='property'"

         <div :class="activeClass"></div>
         
    ➢  In vuejs class binding is called "vue conditional class binding / Object style class binding"

    ➢ To bind html element class in vue way,

        :class="{className: true/false}"

    ➢ In class binding, we mainly pass an object, thats why we can pass mulltiple property inside the object

        <button :class="{active: activeClass == 'green', bold: true}" @click="setClass('green')">GREEN</button>

    ➢ We can use both vue conditional ":class" and html normal "class" togather

    ➢ We can also use array in the colon class (:class=['...', '...'])
   
## **10 Style Binding**

    ➢ Style binding in regular inline CSS way

        <div class="card" style="background-color: red; color: white;">
            Card
        </div>

    ➢ Style binding in attribute binding way
        
        Dom,

            <div class="card" :style="'background-color:' + bgColor +'; color: white;'">
                Card
            </div>

        App.js, 

            var app = Vue.createApp({
                data(){
                    return {
                        textColor: 'white',
                        bgColor: 'green',
                        border: '3px solid blue'
                    }
                },
            });

    ➢ We have to write JS syntax inside colon attribute ":style='...'"

    ➢ Style binding in vue object style
        
        Dom,
            
            <div class="card" :style="{'background-color': bgColor, 'color' : textColor, 'border': border}">
                Card
            </div>

        App.js, 

            var app = Vue.createApp({
                data(){
                    return {
                        textColor: 'white',
                        bgColor: 'green',
                        border: '3px solid blue'
                    }
                },
            });

    ➢ The hyphen(-) symbolic css property is recommanded to write Camel Case

        Dom,
            
            <div class="card" :style="{backgroundColor: bgColor, 'color' : textColor, 'border': border}">
                Card
            </div>

        App.js, 

            var app = Vue.createApp({
                data(){
                    return {
                        textColor: 'white',
                        bgColor: 'green',
                        border: '3px solid blue'
                    }
                },
            });

    ➢ Example of html input element with color valued type attribute

        <input type="color" v-model="bgColor">



    






