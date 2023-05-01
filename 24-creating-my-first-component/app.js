var app = Vue.createApp({
    data(){
        return{

        }
    },
});

app.component('contact-details', {
    data(){
        return{
            name: 'Mamunur Rashid',
        }
    },

    template: `
        <h1>Contact Details</h1>
        <p><strong>Name:</strong>Mamunur Rashid</p>
        <p><strong>Website:</strong>www.rimonbd.com</p>
        <p><strong>Address:</strong>Dhaka, Bangladesh</p>`,
});
app.mount('#app');
