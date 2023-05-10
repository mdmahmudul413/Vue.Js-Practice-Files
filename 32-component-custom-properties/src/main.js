// After creating App.vue
import { createApp } from 'vue'
import App from './App.vue'

// for creating global component
// import ContactDetails from './ContactDetails.vue'

var app = createApp(App);

// global component
// app.component('contact-details', ContactDetails);

app.mount('#app');
