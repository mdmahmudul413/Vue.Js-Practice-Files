## **03 Environment Setup**

    ⇨ Two types of Environment setup is available
        ➢ CDN : Control the part of HTML
        ➢ CLI(Webpack) :  Control Entire Webpage event routing

## **04 Data and attribute binding**

    ➢ Same Process done on part 03 Environment-Setup
    ➢ String interpolation 
    ➢ Data Binding 
    ➢ Attribute Binding 

## **05 Method and Events**

    ➢ In Vue JS we write method in methods: {...}
    ➢ We can also show the value of methods in the Dom through String interpolation.
    ➢ Process to show methods value in the Dom
    ➢ We can directly execute JS conde in the Dom inside curly braces
    ➢ Event Binding
    ➢ v-on:click="increment()" / v-on:click="increment" both allow
    ➢ event binding shorthand: @click="increment"
    ➢ Bind event directly to write javascript code inside DOM

## **06 Event and method arguments**

    ➢ we can pass argument on an event
    ➢ How to get PointerEvent object(click event object) 

## **07 Event Modifiers**

    ➢ We have some default event for input tag(onkeyup, onkeydown, oninput)
    ➢ Native keyboard event
    ➢ Showing something in the vue way
    ➢ Event Modifiers
    ➢ Event Modifiers: @keyup.enter="handleKeyup"
    ➢ More Event Modifiers
    ➢ Get Native Submit Event Object
    ➢ Event Modifiers: @submit.prevent="handleFormSubmit"
    ➢ We can use click event on <div>
    ➢ Event Modifiers: @submit.prevent="handleFormSubmit"
    ➢ Event Modifiers: @click.right="handleCardEvent" will work when we click on mouse right
    ➢ Differentiate two individual events() - e.stopPropagation()
    ➢ Event Modifiers: @click.stop="handleViewClick

## **08 Two way data binding**

    ➢ Input Event: <input type="text" @input="handleInput">
    ➢ For manually two way bindings use ":value='variable'" in the input field
    ➢ Two way bindings in vue.js use "v-model='variable'" in the input field
    ➢ To take every input as number use "v-model.number='variable'" in input field
    ➢ Modify "v-model": <input v-model.number="num" type="text">
   
## **09 Class binding**

    ➢ To bind html element class in normal way, use ":class='property'"
    ➢ vue conditional class binding / Object style class binding
    ➢ To bind html element class in vue way, :class="{className: true/false}"
    ➢ We can use both vue conditional ":class" and html normal "class" togather
    ➢ We can also use array in the colon class (:class=['...', '...'])
   
## **10 Style Binding**

    ➢ Style binding in regular inline CSS way
    ➢ Style binding in attribute binding way
    ➢ We have to write JS syntax inside colon attribute ":style='...'"
    ➢ Style binding in vue object style
    ➢ The hyphen(-) symbolic css property is recommanded to write Camel Case
    ➢ Example of html input element with color valued type attribute
        <input type="color" v-model="bgColor">



    






