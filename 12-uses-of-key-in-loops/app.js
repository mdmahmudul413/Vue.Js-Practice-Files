var app = Vue.createApp({
    data(){
        return{
            skills: [
                {name: 'Laravel', experience: 5},
                {name: 'Vue.js', experience: 2},
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

app.mount('#app');