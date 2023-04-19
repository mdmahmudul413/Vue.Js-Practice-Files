var app = Vue.createApp({
    data(){
        return{
            review: '',
            show: false,
            skills: [
                {name: 'HTML', experience: 12},
                {name: 'Css', experience: 10},
                {name: 'Js', experience: 10},
                {name: 'Java', experience: 5},
                {name: 'PHP', experience: 4},
                {name: 'Node Js', experience: 3},
                {name: 'Python', experience: 1},
                {name: 'Go', experience: 2},
            ],
        }
    },

    computed:{
        countTotal(){
            console.log('Count from computed property');
            return this.skills.length;
        },

        experiencedSkills(){
            let ex = this.skills.filter((item) =>{
                return item.experience >= 10;
            });

            return ex;
        }
    },

    methods: {
        removeSkill(i){
            this.skills.splice(i,1);
        },

        // This countTotal() method is called multiple times which can be slower performense
        // countTotal(){
        //     console.log('Count from method');
        //     return this.skills.length;
        // }
    },
});

app.mount('#app');