var app = Vue.createApp({
    data(){
        return{
            aboutMe:{
                name: 'Mamunur Rashid',
                nickName: 'Rimon',
                website: 'http://rimonbd.com'
            },

            skills: [
                {name: 'Laravel', experience: 5},
                {name: 'Vue.js', experience: 2},
                {name: 'Bootstrap', experience: 2},
            ],

        }
    },

    methods: {

    },
});

app.mount('#app');