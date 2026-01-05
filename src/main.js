import BaseHeader from './ui-element/BaseHeader.vue';
import BaseCard from './ui-element/BaseCard.vue'
import BaseButton from './ui-element/BaseButton.vue';
import BaseTitle from './ui-element/BaseTitle.vue';
import BaseTextInput from './ui-element/BaseTextInput.vue';
import BaseDatePicker from './ui-element/BaseDateInput.vue';
import BaseDropdownInput from './ui-element/BaseDropdownInput.vue'


import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/normalize.css";
import "./assets/css/font-awesome.css";
import router from './router.js'
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)


app.component('base-header', BaseHeader)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-title', BaseTitle)
app.component('base-text-input', BaseTextInput)
app.component('base-date-picker', BaseDatePicker)
app.component('base-dropdown-input', BaseDropdownInput)

app.mount('#app')

