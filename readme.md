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




     



