## **Work with CDN**
    
    ⇨ methods are always calling by default at the time any of property values changing
    ⇨ computed property will consider as a property not a method. so that, we have to call it like,
    
                <h4>Total Skills: {{ countTotal }}</h4>

    not like, 
                <h4>Total Skills: {{ countTotal() }}</h4>

    ⇨ we can not pass argument inside computed property like,

                <h4>Total Skills: {{ countTotal(5) }}</h4>
    

     