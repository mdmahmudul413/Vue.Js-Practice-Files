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

            Note: We don't need attribute binding and event binding both when we use v-model.

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

## **11 List Rendering**

    ➢ Normal list rendering

        Dom,

            <div id="app">
                <h3>Skills</h3>
                <ul>
                    <li v-for="skill in skills">{{ skill }}</li>
                </ul>
            </div>

        app.js,

            var app = Vue.createApp({
                data(){
                    return{
                        skills: ['HTML', 'CSS', 'JS'],
                    }
                }
            });

        Note: It also supports 'skill of skills'

    ➢ Dynamically add new list item

        dom,

            <div id="app">
                <h3>Skills</h3>
                <input type="text" v-model="newSkill">
                <button @click="addSkill">Add New Skill</button>
                <ul>
                    <li v-for="skill in skills">{{ skill }}</li>
                </ul>
            </div>

        app.js,

            var app = Vue.createApp({
                data(){
                    return{
                        skills: ['HTML', 'CSS', 'JS'],
                        newSkill: '',
                    }
                },

                methods: {
                    addSkill(){
                        this.skills.push(this.newSkill);
                    }
                },
            });

    ➢ Dynamically remone new list item. To remove list item, we have to work with index

        dom,

            <input type="text" v-model="newSkill">
            <button @click="addSkill">Add New Skill</button>
            <ul>
                <li v-for="(skill, i) in skills">{{ i+1 }}. {{ skill }} <a href="#" @click="removeSkill(i)">Remove</a></li>
            </ul>

        app.js,

            var app = Vue.createApp({
            data(){
                return{
                    skills: ['HTML', 'CSS', 'JS'],
                    newSkill: '',
                }
            },

            methods: {
                addSkill(){
                    this.skills.push(this.newSkill);
                    this.newSkill = '';
                },
                removeSkill(i){
                    this.skills.splice(i,1);
                }
            },
        });

    ➢ Fetch data from array object

        Dom,

            <ul>
                <li v-for="(skill, i) in skills">{{ i+1 }}. {{ skill.name }} ({{ skill.experience }})</li>
            </ul>

        App.js,

            var app = Vue.createApp({
                data(){
                    return{
                        // array object
                        skills: [
                            {name: 'Laravel', experience: 5},
                            {name: 'Vue.js', experience: 4},
                            {name: 'Bootstrap', experience: 2},
                        ],
                    }
                },
            });

## **12 Uses of Key in Loops**

    1. key is not a default html attribute, vue provide us this attribute.

    2 The uses of key attribute will understand easily if we see the example bellow.

    3. When we click the bellow li, it seems, there is a bug. But actually this is not a bug.

        In the Dom, 

            <ul>
                <input type="text" v-model="newSkillObj.name" />
                <button @click="addSkillObj">Add New Skill</button>
                <li @click="removeSkill(i)" v-for="(skill, i) in skills">
                    <p>
                        {{ i+1 }}. {{ skill.name }} ({{ skill.experience }})
                        <br />
                        <input type="text" placeholder="remark" @click.stop />
                    </p>
                </li>
            </ul>

        app.js,
        
            var app = Vue.createApp({
                data(){
                    return{
                        skills: [
                            {name: 'Laravel', experience: 5},
                            {name: 'Vue.js', experience: 4},
                            {name: 'Bootstrap', experience: 2},
                        ],

                        newSkillObj: {name: "", experience: 0},
                    }
                },

                methods: {
                    addSkillObj(){
                        this.skills.push(this.newSkillObj);
                        this.newSkillObj = {name: "", experience: 0};
                    },

                    removeSkill(i){
                        this.skills.splice(i,1);
                    }
                },
            });

    4. To eliminate this type of problem, we have to pass a unique key (The unique key of the property which is iterating inside the loop) inside the key attribute. In this example, the unique key is skills.name

    5. After passing the unique key the li will be,

        <li @click="removeSkill(i)" v-for="(skill, i) in skills" :key="skill.name"> 

    6. Don't use i in the key attribute

## **13 List Rendering of Object and Numbers**

    1. We will get only value from a object if we don't use 2nd variable key in the loop 

    2. When we use 2nd variable key in the object, we will get object key also,

        <table>
            <tr v-for="(value, key) in aboutMe">
            <td>{{ key }} : {{ value }}</td>
            </tr>
        </table>

    3. Now if we want the index of the object then we have to use the 3rd variable,

        <table>
            <tr v-for="(value, key, i) in aboutMe">
            <td> <b>{{ i+1 }}. {{ key }} :</b> {{ value }}</td>
            </tr>
        </table>

    4. We don't need any varible to simply iterate a loop for a certain times

        <div>
            <p v-for="i in 10">{{ i }}</p>
        </div>

    5. If we want iterate a loop without using any html tag then, we have to use <template> tag

        <div>
            <template v-for="skill in skills" :key="skill.name">
            {{ skill.name }},
            </template>
        </div>

## **14 Conditional Rendering**

    1. v-if or v-show are same type of directives in vue.js

    2. If we use v-show, then the particular html element will not remove from dom.

    3. If we use v-show, then we can't use v-else

    4. But v-if has v-else-if and v-else

## **15 Computed Properties**
    
    1. There is a problem. When any of data property's value change, the methods instantly execute. When there are so many methods 
       inside our project, The vast execution of multiple methods can slower our project performense.

    2. To eleminate this type of problem, vue.js gives us computed property.

    3. We have to remember some things while using computed properties
    
        a. We get computed properties as property like data property not methods,

            <h4>Total Skills: {{ countTotal }}</h4>

          Note: That's why we have to use it inside out Dom as a property

        b. We can't pass arguments inside computed properties

    4. JS Array filter,

        let ex = this.skills.filter((item) =>{
            return item.experience >= 10;
        });


## **16 Watcher**

    1. we can watch a property value changing by watch object

        dom,

            <input type="text" v-model="mobile"/>

        app.js,

            var app = Vue.createApp({
                data(){
                    return{
                        mobile: "",
                    }
                },

                watch:{
                    mobile(newValue){
                        console.log(newValue);
                    }
                }
            });

    2. JS function isNaN() is check a value is number or not

    3. We can do validation by wathcer

    4. The 2nd parameter can be adopted to assign the old value to the mobile data property

        watch:{
            mobile(newValue, oldValue){

                console.log(newValue);

                if(isNaN(newValue)){
                    alert('This is not a number');
                    this.mobile = oldValue;
                }
            }
        }

    5. If we want to watch nested data property

        var app = Vue.createApp({
            data(){
                return{
                    name: {
                        firstName: "",
                        lastName: ""
                    }
                }
            },

            watch:{
                'name.firstName': function(newValue, oldValue){
                    console.log(newValue, oldValue);
                }
            }
        });

    6. We can watch a whole object by doing this bellow,

        var app = Vue.createApp({
            data(){
                return{
                    name: {
                        firstName: "",
                        lastName: ""
                    }
                }
            },

            watch:{
                name: {
                    deep: true,
                    handler: function(newValue){
                        console.log(newValue);
                    }
                }
            }
        });

    7. We can watch array or coumputed property at the same way

## **17 methods vs computed properties vs watcher**

    1. Computed property is better then method, because we will get the first execution while using computed property.

    2. Actually 3 of these are usefull in different cases

        a. computed properties: When we have to calculate various data properties to show property on view, then we use computed property.

        b. methods: we will use methods for event binding or passing arguments.

        c. watcher: watcher will be used for detecting the change of value of data property. Generally watcher is used for validation. But it has multiple uses.

## **19 Ticket Booking App**

    1. We can use functions like array length in computed properties

        <div class="ticket-app__instruction" v-if="selectedSeats.length === 0">
            No seat selected <br>
            Selects some seats first
        </div>

## **20 Multiple App and templates**

    1. If we want to create multiple apps for the various segments for out webpage, we can do this. The created apps will independent.

    2. We can not use a perticular app data property to another app.

    3. For this reason, if we need to share data with the segments, we will not make multiple app.

    4. We can use template property to renden html elements in the dom.

## **21 Vue Js Reactivity How it works**

    1. Two way data binding how it works actually,

        var app = Vue.createApp({
            data(){
                return{
                    name: "",
                }
            },

            methods: {
                crear(){
                    this.name = '';
                }
            },
        });

        app.mount('#app');

    The reactivity working process,

        The data, methods, etc properties return object which are merged to a global object by vue js. We can access this global object by 'this' keyword. 

    2. vue js do this reactivity by vanilla js 'proxy' process 

    3. The proxy process is like bellow,

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

## **22 Understanding Virtual Dom**

    1. Vue js use JS core feature proxy to maintain the Dom Reactivity. But vue js does not only use the proxy feature to maintain reactivity.

    2. If we use the JS proxy to add a new li inside a ul item, it will update the total ul at a time but we can see that vue js does 
       not update the whole dom at a time. The fact is, Vue JS does not use only the proxy for the reactivity.  

    3. Basically Vue JS use DIFF Algorithm to update the new node only

        Explanation: Vue JS firsly check the current Dom value. After the upgration of the Dom, Vue JS compare the upgration with the previous 
        value. Then Vue JS just change the difference which does not need to update the whole Dom. For doing this job if vue js first read the Dom 
        using JS then, after upgration compare the change and again change only the differene, it's a time consuming issue for a large project. 
        That's why Vue JS mainly use Virtual Dom with render function. It means there are some render functions which handles the process of rendering.
        Basically Vertual Dom means Vue JS makes a js object of the current dom value. Then after upgration of the Dom, Vue JS compare it with the 
        Virtual Dom. This process is faster then reading the Dom and change it. That's why we get good performence.

    4. Virtual Dom has multiple benifits 

        We are currently use virtual dom for detecting the change of html dom. But we can use this technology in the android and ios app development.
        Vue JS provide a platform name "Native Script Vue" for developing mobile app.

## **23 Introduction to Components**

    1. The frontend frameworks Angular, React, Vue JS become popular because of Component.

    2. Except component, we can not develop mobile or web app.

    3. Basically sometimes html elements can not serve our whole purpose all the time. Some time we need custom UI.

    4. Suppose we need a rating component. But HTML does not provide us rating tag. In this case, using Vue JS we can make a component
       of rating and use it multiple time whenever we need it inside our UI. So that, simply component is a combination of 
       HTML default tag which can be reused multiple times.

    5. We can use attribute inside components like default HTML tag. We can also define custom attribute also. This is called props.

## **24 Creating My First Component**

    1. If we want to create a component, at first we have to register it.

    2. Registering a component

        app.component('contact-details', {
            data(){
                return{
                    name: 'Mamunur Rashid',
                }
            },

            template: `
                <h1>Contact Details</h1>
                <p><strong>Name:</strong>Mamunur Rashid</p>
                <p><strong>Website:</strong>www.rimonbd.com</p>
                <p><strong>Address:</strong>Dhaka, Bangladesh</p>`,
        });

            Note: 
            
                a. Best practice is to register a componet using dash(-) in the component name to avoid the default html tag name.

                b. Basically components behavior and the vue js app behavior are closly same. The second parameter object is as like as the create app object. 
                We can simply declear data property inside the object.
    
    3. Now use <contact-details/> or <contact-details></contact-details> inside template to use the component.

## **25 Changing Development Environment(Vue CLI)**

    1. We will continue the rest parts using Vue CLI instead of using CDN.

    2. We should not develop a large project usnig CDN because there are so many limitations.

    3. CLI - Command Line Interface

    4. We don't get proper debugging benefit in vue CDN 

    5. In vue CDN, project file runs using file url or file protocol. We don't get the maximum benefit of JS while using file protocol. 

    6. We can't do routing easily in CDN.

    7. We will get modern JS all features in Vue CLI

    8. We don't get proper suggestions while using Vue CDN

    9. The CND project output is not minified but CLI project output is minified. Thats why CND injected project has performense issue
       for loading slower in the browser.

    10. In CDN installation, vue js use a function name eval(). It has a huge performense issue. That's why JS authority suggest us to not use eval() function

    11. Vue CLI projects can easilly run any modern or old version browser. 

## **26 Introduction to Vue CLI**

    1. Node.js is a back-end JavaScript runtime environment.

    2. Previously we can not run js code without the help of browser. But now we can run js code without browser for the help of node js.

    3. We need node js for creating vue CLI project.

    4. Installing vue cli

        command: npm install -g @vue/cli

    5. To check version 

        command: vue --version

    6. Now we will create project using vue CLI

        We can install vue js via command line or Graphical User Interface (GUI)

    7. Creating project via command line

        command: vue create project-name

    8. Creating project via GUI

        command: vue ui

## **27 Understanding CLI Project Structure**

    1. CLI project is mainly a node js project

    2. A standard project has a package.json file. Inside package.json, there are som configura of node js project.

        a. dependencies

            Inside dependencies we will find the js library dependencies information. Initially there will be core-js and vue dependencies.

        b. devDependencies

            We need devDependencies at the time of development. We don't need devDependencies in our final build.

        c. script

            There are some script name like serve, build, lint. We can make command of "npm run serve"/"npm run build"/"npm run lint"
            to run those script. 'serve' script has some service of detecting any change of our code or file and instantly
            refresh it into our browser. Thats why at the time of development, we will use this "serve" script. After
            Development we will make command of "build". 

    3. Node Modules Folder

        Dependencies and devDependencies will be installed inside this folder.

        Note: When we share our project with anyone, we always share it without node modules folder. Because we can easilly make this folder using "npm install" command.

    4. public/index.html file will serve first.

    5. src folder: We mainly write our codes inside this folder.

    6. src/main.js this file mainly injects inside index.html.

## **28 Recreating Vue App with CLI**

    1. To better understand of vue cli, we first delete assets, components folders and App.vue file. 

    2. Now inside src folder, there is only main.js file.

    3. main.js file is the main entry point. This file will autometically inject inside index.html bellow app element.

    4. Previously we create app through vue CDN createing a global object of 'Vue' but Now in CLI we will create app 
       using modern JS 'import' keyword. And the Vue package is already installed in node modules as a dependency. So we just import it and create an app.  

    5. Using ES6, we don't have to import full Vue. We can only import the perticular method which we need like bellow.

        import { createApp } from "vue";

        Note: Here we just import createApp method. But in vue CDN, we created full vue object to use createApp method.

    6. Template option is not support in vue CLI because runtime compilation is not supported. On the other hand template option is 
        using eval() function which is not appropiate.

    7. Without using template option, we can use render function for rendering something in the view.

    8. But firsly render function simply render plain text. 

    9. If we want to render html tag, we have create html tag through JS. 

    10. For serving this perpous, Vue JS gives us a method "h" in vue global object. Using this h method, we can create html tag. Firstly we have to import it,

        import { createApp, h } from 'vue'

    11. To create html tag,

        a. If we want "<h1>Welcome to vue js</h1>" type of output,
        
            render() {
                return h("h1", {}, this.msg);
            },

            Note: h(tag name, attribute, content)

        b. If we want bellow type of output,

            "<div>
                <h1>Welcome to vue js</h1>
            </div>" 
        
            Then,

                render() {
                    return h("div", {}, [
                        h("h1", {}, this.msg)  
                    ]);
                },
    
        Note: This is not the optimal way of coding, we will write the html code inside vue file.

    12. Inside vue file, there are three sections,

        a. template
        b. script
        c. style

    13. Now we can write html part inside template section. We don't need to write complex render function. And also can write js code inside script section.

    14. Importing file instruction,

        a. When we import some package, we just write the name of the package,

            import { createApp, h } from 'vue'

        b. When we want to import own custom make file, we have to give relative path,

            import App from './App.vue'

    15. In this way, vue js mainly create internally render function of the template section, and render the output. We can check it like bellow,

        main.js,

            console.log(App);

    16. We can add different options like methods or anything else in the script section.

## **29 Recreating The Component with Vue CLI**

    1. We will create the part 24 component with vue CLI in this part

    2. If we create component name "contact-details" like 24, then use it as a tag inside App.vue. It will give the same error like bellow,

        Component provided template option but runtime compilation is not supported in this build of Vue.

    3. Actually we will write component in different file in Vue Cli.

    4. The process of creating and using component in vue cli bellow,

        a. Create ContactDetails.vue file and inside ContactDetails.vue,

            <template>
                <div class="Contact-Details">
                    <h1>Contact Details</h1>
                    <p><strong>Name:</strong>Mamunur Rashid</p>
                    <p><strong>Website:</strong>www.rimonbd.com</p>
                    <p><strong>Address:</strong>Dhaka, Bangladesh</p>
                </div>
            </template>

        b. Inside main.js,

            import ContactDetails from './ContactDetails.vue'

            var app = createApp(App);

            app.component('contact-details', ContactDetails);

            app.mount('#app');

        c. Inside App.vue,

            <template>
                <div class="app-view">
                    <contact-details></contact-details>
                </div>
            </template>

        Note: This is a global component. Because we make it using app.component(). We can use this global component anywhere inside our project.

    5. We can also make local component if we need. When we want a component in a perticular file then we need local component.

    6. Registering local component inside App.vue

        <template>
            <div class="app-view">
                <contact-details></contact-details>
                <ContactDetails/>
            </div>
        </template>

        <script>
        import ContactDetails from './ContactDetails.vue'
        export default {
            data(){
                return{

                }
            },
            components:{
                ContactDetails
            }
        }
        </script>

## **30 Vue CLI Alternatives**

    1. The alternate of vue CLI is mainly Vite Package.

    2. We can create and develop our project using vite package. This is comparativly faster then other build tools.

## **31 Adding Style to Components**

    1. We can give css styling inside style tag in the components.

    2. We can give inline css also in the template.

    3. To eliminate style confliction, we can use scoped attribute inside style tag in the component.

        <style scoped>
            .container{
                margin: 28px;
                padding: 28px;
                border: 2px solid;
                color: red;
            }
        </style>

## **32 Components Custom Properties**

    1. We can add various attributes inside a html tag like <img> tag has "src" attribute.

    2. By the help of Vue JS, we can create components and use it as a tag like <contact-details>

    3. We can also add attributes inside these tag which are called props.

    4. We can not set as the same key as the data properties in the props. This will through error.

    5. Declear props like bellow,

        export default {
            props: ['name', 'website', 'address'],
            data(){
                return{

                }
            },
        }

    6. Set the props value like bellow,

        <contact-details name="Mahmudul Islam" website="www.youtube.com" address="Taltola, Bangladesh"></contact-details>

    7. Now we can use props inside template like {{ name }}, {{ website }}

    8. If we set props key like camel case multiple word "wesiteAddress" then, we set the attribute like bellow,

        <contact-details website-address="www.youtube.com"></contact-details>

## **33 Props Validation**

    1. We can validate our props like bellow

        props: {
            name: String, 
            websiteAddress: String, 
            address: String
        },

    Note: We can declear any props String, Number, array, object, any, etc.

    2. We can validate with more specification,

        props: {
            name: String, 
            websiteAddress: {type: String, required: true}, 
            address: {type: String, required: false, default: 'http://yourwebsite.com'}
        },

    3. We can use validator for validation

    4. We can also use functions in the validation.

    5. We can also pass array/object using v-for loop iteration or anything else

## **34 Component Slots**

    1. When we need same component with different html output, we have to use component slots.

    2. How to use slot,
    
        Suppose there is a component name CardView.vue

        Inside CardView.vue,

            <template>
                <div class="the-card">
                    <div class="the-card__title">
                        {{ cardTitle }}
                    </div>
                    <div class="the-card__body">
                        <slot></slot>
                    </div>
                </div>
            </template>

            <script>
            export default {
                props: ["cardTitle"]
            };
            </script>

        Inside App.vue

            <template>
                <div class="container">
                    <header>
                        <h2>{{ msg }}</h2>
                    </header>

                    <card-view cardTitle="About me">
                        Hi, I am Md. Mahmudul Islam
                    </card-view>
                </div>
            </template>

            <script>

                import CardView from './CardView.vue'

                export default {

                    data(){
                        return{
                            msg: 'Welcome to vue js',
                        }
                    },

                    components:{
                        CardView
                    }

                }
            </script>
    
    3. We should not give 'scoped' attribute in the style tag inside slot component

    4. We can set some default slot content like bellow,

        <slot>
            Default Card Contents goes here.
        </slot>

## **35 Named Slots**

    1. When we have to define multipla slots, we will use named slots.

    2. When we declear a slot default, the attribute "name" value will name="default" but we can ignore it if we want to make a slot default.

        <slot name="default">
            Default Card Contents goes here.
        </slot>

    3. Suppose we have a component which have two slots. Now the process of implementing named slot,

        CardView.vue Component

            <template>
                <div class="the-card">
                    <div class="the-card__title">
                        {{ cardTitle }}
                    </div>
                    <div class="the-card__body">
                        <slot>
                            Default Card Contents goes here.
                        </slot>
                    </div>

                    <div class="the-card__footer">
                        <slot name="footer">
                            Default Footer
                        </slot>
                    </div>
                </div>
            </template>

        App.vue,

            <card-view cardTitle="About me">

                <template v-slot:default>
                    Hi, I am Md. Mahmudul Islam
                </template>

                <template v-slot:footer>
                    <a href="http://youtube.com" target="_blank">Learn More...</a>
                </template>

            </card-view>

    4. Short cut way of using slot component, We can use #default instead of v-slot:default

        <card-view cardTitle="Apple iPhone 12 Pro">

            <template #default>
                <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg" alt="">
                <p>Versions: A2407 (International); A2341 (USA); A2406 (Canada, Japan); A2408 (China, Hong Kong)</p>
            </template>

            <template #footer>
                <button>Buy Now</button>
                <button>Add to Cart</button>
            </template>
        </card-view>

## **36 Slot Object and More**

    1. Now we have a CardView.vue slot component. If we console like bellow,

        <script>
            export default {

                mounted() {
                    console.log(this.$slots);
                    console.log(this.$slots.default);
                    console.log(this.$slots.footer);
                },

                props: ["cardTitle"]

            };
        </script>

      Note: We will get two object in the console. Because we use this slot component two times in the App.vue.

    2. Actually this object can be usefull for show or hide a slot of a component.

    3. When we don't want to add default slot elements and also don't want to see the empty slot styling, we can simply ignor that slot like bellow,

        <div class="the-card__footer" v-if="$slots.footer">
            <slot name="footer">
                Default Footer
            </slot>
        </div>

## **37 Components Custom Event ($emit)**

    1. A ProductCard.vue component was created in this part where a product card was designed and there are two buttons.

    2. Now If we want to handle click event from app.vue,

        ProductCard.vue,

            <template>
                <div class="product-card">

                    ...........
                    ...........

                    <div class="product-card__footer">

                        <button @click="handleBuyNowClick">Buy Now</button>
                        <button>Add to Cart</button>

                    </div>

                </div>
            </template>


            <script>
                export default {

                    methods: {

                        handleBuyNowClick(){
                            this.$emit("buy-now-clicked");
                        }

                    },
                    
                };
            </script>

        App.vue,

            <template>
                <div class="container">

                    <product-card :product="product" @buy-now-clicked="buyNow">
                        
                    </product-card>

                </div>
            </template>


            <script>
                import ProductCard from './ProductCard.vue'
                export default {

                    data(){
                        return{
                            product: {
                                name: "Iphone 12 pro",
                                thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
                                price: 167689,
                            }
                        }
                    },

                    components:{
                        ProductCard
                    },

                    methods: {
                        buyNow(){
                            console.log("Buying....");
                        }
                    },

                }
            </script>

    3. Now if we want to pass argument to the custom event,

        ProductCard.vue,

            methods: {
                handleBuyNowClick(){
                    this.$emit("buy-now-clicked", this.product);
                },
                handleAddToCartClick(){
                    this.$emit("add-to-cart-clicked", this.product);
                },
            },

        App.vue,

            methods: {
                buyNow(product) {
                    console.log("Buying...");
                    console.log(product);
                },
                addToCart(product) {
                    console.log("Adding...");
                    console.log(product);
                },
            },

        Note: No need to pass argument inside the tag, simply pass the method reference like bellow,

            <product-card 
            @buy-now-clicked="buyNow" 
            @add-to-cart-clicked="addToCart"
            >
            </product-card>

## **38 Component Communications**

    1. We have seen the component communication before.

    2. Here, App.vue is the parent component. And ProductCard.vue is the child component. 
    
    3. When we want to send data from parent to child, we send it by props. When we want to send data from child to parent, 
       we send it by $emit. This is mainly Component communication.

    4. We can validate $emit like props. Its optional but we can use this process.

    5. We can validate event $emit like bellow,

        <script>
            export default {
                emits: {

                    'buy-now-clicked' : function(data){
                        if(!data){
                            console.error("Data missing for buy now clicked event...");
                            return false;
                        }
                        return true;
                    }

                },
                methods: {

                    handleBuyNowClick(){
                        this.$emit("buy-now-clicked");
                    },

                },
            };
        </script>

    6. Those who follow TDD (Test Driven Development) can use this process.

## **39 Unidirectional Data Flow / One Way Data Flow**

    1. Unidirectional data flow mainly is a rule. If we follow this rule, it will minimise bugs. Otherwise bugs can arise easily.

    2. People things vue js follow two way data binding, thats why it might not use unidirectional data flow. But 
       it's a wrong thought. We can use unidirectional data flow while using two way data bindings.

    3. We can not make any change or mutation of the given data from parent component using any kind of event.

    4. Here ProductCard.vue is the child component.

    5. Inside ProductCard.vue,

        <template>

            <div class="product-card">
            
                <div class="product-card__title">

                    <img src="/img/star.png" @click="toggleFavourite" v-if="product.addedToFavourite" width="26">

                    <img src="/img/gray.png" @click="toggleFavourite" v-else width="26">

                </div>

        </template>

        <script>
            export default {

                props: { product: { type: Object, default: () => {} } },

                methods: {

                    toggleFavourite(){
                        this.product.addedToFavourite = !this.product.addedToFavourite;
                    }

                },

            };
        </script>

    Note: We send data inside ProductCard.vue from parent component app.vue via props. We can not change or mutation the data from child component ProductCard.vue. 
          When we click the img, it will through an error like bellow,

          ***error  Unexpected mutation of "product" prop  vue/no-mutating-props

    5. To change or mutation the data, we have $emit event from child to parent. Then parent can change or mutation the data. Mainly this is called Unidirectional data flow.

    6. Example,

        Inside ProductCard.vue,

            <template>

                <div class="product-card">
                
                    <div class="product-card__title">

                        <img src="/img/star.png" @click="toggleFavourite" v-if="product.addedToFavourite" width="26">

                        <img src="/img/gray.png" @click="toggleFavourite" v-else width="26">

                    </div>

            </template>

            <script>
                export default {

                    props: { product: { type: Object, default: () => {} } },

                    methods: {

                        toggleFavourite(){
                            this.$emit("toggle-favourite", this.product);
                        }

                    },

                };
            </script>
        
        Inside App.vue,

            <template>
                <div class="container">
                    <product-card
                        v-for="product in products"
                        :key="product.name"
                        :product="product"
                        @toggle-favourite="handleToggle"
                    >
                    </product-card>
                </div>
            </template>

            <script>
                import ProductCard from "./ProductCard.vue";
                export default {
                    data() {
                        return {
                            products: [
                                {
                                    name: "Iphone 12 pro",
                                    thumbnail:
                                        "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
                                    price: 167689,
                                    addedToFavourite: true,
                                },
                                {
                                    name: "Waltom RM",
                                    thumbnail:
                                        "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-11i.jpg",
                                    price: 67689,
                                    addedToFavourite: false,
                                },
                                {
                                    name: "Xiomi s5",
                                    thumbnail:
                                        "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30-pro.jpg",
                                    price: 18689,
                                    addedToFavourite: true,
                                },
                            ],
                        };
                    },
                    components: {
                        ProductCard,
                    },
                    methods: {
                        handleToggle(product){
                            product.addedToFavourite = !product.addedToFavourite;
                        }
                    },
                };
            </script>

## **40 Moving to Vite**

    1. Vite is another development environment like vue CLI.

    2. We will get very fast build if we use vite development environment.

    3. Vite is a french word which means fast.

    4. Installation,

        command
            
            a. npm create vite@latest 40-moving-to-vite -- --template vue 

            b. cd 40-moving-to-vite

            c. npm install

            d. npm run dev

    5. Now we move our previous project(part 39) from vue cli to vite

    6. we will copy vue cli project src folder and past it to vite project. Also have to copy the other necessary files 
       and paste it inside vite project.  

## **41 Adding V-Model Support**

    1. In this part, we will create a custom rating component and add v-model support inside the component 
       which does not break unidirectional data flow rule.

    2. If we use v-model in the parent component, we will get "modelValue" inside props in the child component.

        <script>
            export default {
                props: {

                    modelValue:{
                        type: Number,
                        default: 0,
                    }

                }
            }
        </script> 

    3. Also we have to emit this "modelValue" for getting v-model support in the child component,

        <script>
            export default {
                
                props: {
                    modelValue:{
                        type: Number,
                        default: 0,
                    }
                },

                emits: ["update:modelValue"],
            }
        </script>

    Note: Now we get the v-model support inside the child component without breking unidirection data flow concept.

    4. We also added a click event inside child component which needs to emit click method,

        <template>
            <div class="rating">
                <!-- index will start from 1 -->
                <div class="rating-star" v-for="index in 5" :key="index" @click="handleClick(index)">
                    <img src="/public/img/star.png" v-if="index <= modelValue" alt="" width="36">
                    <img src="/public/img/gray.png" v-if="index > modelValue" alt="" width="36">
                </div>
            </div>
        </template>


        <script>
            export default {

                props: {
                    modelValue:{
                        type: Number,
                        default: 0,
                    }
                },

                emits: ["update:modelValue"],

                methods: {
                    handleClick(index){
                        this.$emit("update:modelValue", index);
                    }
                }

            }
        </script>


## **42 Multiple V-Model Support**

    1. Multiple V-Model support is quite similler to the part one.

    2. Inside CreditCard.vue,

        <template>
            <div class="credit-card">
                <label>Name on Card</label>
                <input
                    type="text"
                    :value="nameOnCard"
                    @input="handleInput('update:nameOnCard', $event)"
                /><br />

                <label>Card Number</label>
                <input
                    type="text"
                    :value="cardNumber"
                    @input="handleInput('update:cardNumber', $event)"
                /><br />

                <div class="row">

                    <div class="col-6">

                        <label>Expiry</label>
                        <input
                            type="text"
                            :value="expiry"
                            @input="handleInput('update:expiry', $event)"
                        />

                    </div>
                    <div class="col-6">

                        <label>CVV</label>
                        <input
                            type="text"
                            :value="cvv"
                            @input="handleInput('update:cvv', $event)"
                        />

                    </div>
                </div>
            </div>
        </template>

        <script>
        export default {

            props: {
                nameOnCard: {
                    type: String,
                    default: "",
                },
                cardNumber: {
                    type: Number,
                    default: "",
                },
                expiry: {
                    type: Number,
                    default: "",
                },
                cvv: {
                    type: Number,
                    default: "",
                },

            },

            methods: {
                
                handleInput(eventName, e) {
                    this.$emit(eventName, e.target.value);
                },

            },
        };
        </script>

        <style>
            ...............
            ...............
            ...............
        </style>

    3. Inside App.vue,

        <template>

            <header>
                <h2>{{ msg }}</h2>
            </header>

            <div class="container">
                <h4>Credit Card Input</h4>
                <credit-card
                    v-model:nameOnCard="nameOnCard"
                    v-model:cardNumber="cardNumber"
                    v-model:expiry="expiry"
                    v-model:cvv="cvv"
                ></credit-card>

                <br />
                <hr />
                <br />

                <p>
                    Name: {{ nameOnCard }} <br />
                    Card Number: {{ cardNumber }} <br />
                    Expiry: {{ expiry }} <br />
                    CVV: {{ cvv }}
                </p>

            </div>

        </template>

        <script>
        import CreditCard from "./CreditCard.vue";

        export default {
            data() {

                return {
                    msg: "Welcome to vue js",
                    nameOnCard: "Mr.",
                    cardNumber: "",
                    expiry: "",
                    cvv: "",
                };
                
            },

            components: {
                CreditCard,
            },

            methods: {},

        };
        </script>

        <style>
            .......................
            .......................
            .......................
        </style>


## **42 Multiple V-Model Support**

    1. We can use child component props property as attribute value from parent component.

        app.vue,

            <the-comment
                v-model="myComment"
                buttonText="Continue"
            ></the-comment>

        TheComment.vue,

            props: {
                buttonText: {
                    type: String,
                    default: "OK",
                },
            },

        Note: Here we use "buttonText" as an attribute.

    2. The defined props properties of child components receive values from parent components. But the undefined attributes which actually are 
       not props proerty will locate to the mother element of child component. These attrigute are called non prop attribute.

    3. Non prop attribute has some benifits. Because of this attributes locate to the parent element of child component, we can pass
       different css class from parent attribute to child attribute.

    4. We can get all non prop attribute like bellow,

        Inside Child component,

            <script>
                export default {
                    mounted() {
                        console.log(this.$attrs);
                    },
                };
            </script>

    5. If we want non prop attribute don't locate at the parent element of child component,

        <script>
            export default {
                inheritAttrs: false,
            };
        </script>

    6. Now, we can bind any element of child component with the non prop attribute like bellow,

        Inside Child component,

            <textarea
                :value="modelValue"
                @input="handleInput"
                v-bind="$attrs"
            ></textarea>

    7. But If there are multiple root or mother elements inside child component, then we just pass v-bind="$attrs" at that selected element.

    8. We can also add all the events from parent components.

## **42 Lifecycle Hooks**

    1. Lifecycle Hooks are very important for developing web or mobile app.

    2. When we create app in vue js. The entire process runs step by step. We may execute different code at different step. 
       Vue js provides up lifecycle hook for executing our codes at different step of the entire process.

    3. Lifecycle Hooks methods are called one by one during the entire process.

    4. beforeCreate() will return undefined becuse the data property does not initialize at that time,

        export default {
            data() {
                return {
                    msg: "Welcome to vue js",
                };
            },

            beforeCreate(){
                console.log(this.msg)
            },
        };

    Note: beforeCreate() method call before initialize the data() property

    5. We don't have to use arrow functions at the time of creating lifecycle hook.

    6. beforeMount() call before update the DOM.

    7. mounted() call after update the DOM.

    8. beforeUpdated() & updated() will call after make any change in the DOM.

    9. We can use lifecyle hook methods in every components.

    10. beforeUnmounted() and unmounted() will call when some component will unmount.

    11. Use case of Lifecycle Hooks,

        a. beforeCreate() & created()       :   API call
        b. beforeMount() & mount()          :   DOM Manipulation using JS
        b. beforeUpdated() & updated()      :   When some update will occured (Tracking click event)
        b. beforeUnmounted() & unmounted()  :   When some component will unmount
        

