## **07 Event Modifiers**

    1. We have some default event for input tag onkeyup, onkeydown, oninput, etc

    2. Native keyboard event,

        to get native keyboard event object,

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
        
        DOM,
            
            <input @keyup="handleKeyup" type="text">

    3. Showing something in the vue way,

        ## vue way means we declear all property, values are decleared in the data function. 
    
    4. Event Modifiers,

        syntax,
            @event_name.event_modifiers="method_call"

            Example: @keyup.enter="handleKeyup"

    5. More Event Modifiers,

            @keyup.enter="handleKeyup"
            @submit.prevent="handleFormSubmit"
            @click.right="handleCardEvent"
            @click.left="handleCardEvent"
            @click.stop="handleViewClick"

    6. Get Native Submit Event Object,
        app.js, 

            methods: {
                handleFormSubmit(e){
                    e.preventDefault();
                    console.log(e);
                }
            }

        Dom, 
            <form @submit="handleFormSubmit">
                
            </form>
            



    


