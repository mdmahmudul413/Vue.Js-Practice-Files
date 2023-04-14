## **04 Data and attribute binding**

    1. Data Binding(string interpolation)

        // create a instacce of the global object

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

    2. Attribute Binding

        a. use "v-bind"
         <a v-bind:href="tutorialInfo.githubLink">GitHub</a>
        b. use ":" (shortcut)
         <a v-bind:href="tutorialInfo.githubLink">GitHub</a>


    3. To get an anchor tag output in the DOM
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
    


    
