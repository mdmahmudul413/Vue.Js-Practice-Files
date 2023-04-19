var app = Vue.createApp({
    data(){
        return{
            show: false,
            skills: [
                {name: 'HTML', experience: 5},
                {name: 'Css', experience: 7},
                {name: 'Js', experience: 6},
                {name: 'Java', experience: 5},
                {name: 'PHP', experience: 4},
                {name: 'Node Js', experience: 3},
                {name: 'Python', experience: 1},
                {name: 'Go', experience: 2},
            ],
        }
    },

    methods: {
        toggle(){
            this.show = !this.show;
        }
    },
});

app.mount('#app');