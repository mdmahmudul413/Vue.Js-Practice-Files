## **09 Class binding**

    1. To bind html element class in vue way, :class="{className: true/false}":

        Example:
            Dom,
                <button :class="{active: activeClass == 'green', bold: true}" @click="setClass('green')">GREEN</button>

        This is called vue conditional class binding / Object style class binding.

    
