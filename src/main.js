import BaseHeader from './ui-element/BaseHeader.vue';
import BaseCard from './ui-element/BaseCard.vue'
import BaseButton from './ui-element/BaseButton.vue';
import BaseTitle from './ui-element/BaseTitle.vue';
import BaseTextInput from './ui-element/BaseTextInput.vue';
import BaseDateInput from './ui-element/BaseDateInput.vue';
import BaseDropdownInput from './ui-element/BaseDropdownInput.vue'
import BaseCardRow from './ui-element/BaseCardRow.vue';
import BaseDialog from './ui-element/BaseDialog.vue';
import BasePagination from './ui-element/BasePagination.vue';

import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/normalize.css";
import "./assets/css/font-awesome.css";
import router from './router.js'
import { createPinia } from 'pinia';
import configueAxios from './axios-config.js';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
configueAxios(router)


app.component('base-header', BaseHeader)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-title', BaseTitle)
app.component('base-text-input', BaseTextInput)
app.component('base-date-input', BaseDateInput)
app.component('base-dropdown-input', BaseDropdownInput)
app.component('base-card-row', BaseCardRow)
app.component('base-dialog', BaseDialog)
app.component('base-pagination', BasePagination)

app.mount('#app')

