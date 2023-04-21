var app = Vue.createApp({
    data(){
        return{
            mobile: "",
            name: {
                firstName: "",
                lastName: ""
            },
        }
    },

    watch:{
        mobile(newValue, oldValue){
            console.log(newValue);

            // isNaN() will check newValue is number or not
            if(isNaN(newValue)){
                alert('This is not a number');
                this.mobile = oldValue;
            }

            if(newValue.length == 11){
                alert('An OTP has been sent')
            }
        },

        // When we want to watch nested property
        // 'name.firstName': function(newValue, oldValue){
        //     console.log(newValue, oldValue);
        // },

        name: {
            deep: true,
            handler: function(newValue){
                console.log(newValue);
            }
        }
    }
});

app.mount('#app');