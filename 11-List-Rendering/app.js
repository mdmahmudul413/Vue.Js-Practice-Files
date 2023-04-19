// create a instacce of the global object
// we have to pass a json value inside the instance
var app = Vue.createApp({
    data(){
        return{
            // normal array
            // skills: ['HTML', 'CSS', 'JS'],

            // array object
            skills: [
                {name: 'Laravel', experience: 5},
                {name: 'Vue.js', experience: 4},
                {name: 'Bootstrap', experience: 2},
            ],
            newSkill: '',

            newSkillObj: {name: "", experience: 0},
        }
    },

    methods: {
        addSkill(){
            this.skills.push(this.newSkill);
            this.newSkill = '';
        },

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