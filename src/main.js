import BaseHeader from './components/ui-element/BaseHeader.vue';
import BaseCard from './components/ui-element/BaseCard.vue'
import BaseButton from './components/ui-element/BaseButton.vue';
import BaseTitle from './components/ui-element/BaseTitle.vue';
import BaseTextInput from './components/ui-element/BaseTextInput.vue';
import BaseDateInput from './components/ui-element/BaseDateInput.vue';
import BaseDropdownInput from './components/ui-element/BaseDropdownInput.vue'
import BaseCardRow from './components/ui-element/BaseCardRow.vue';
import BaseDialog from './components/ui-element/BaseDialog.vue';
import BasePagination from './components/ui-element/BasePagination.vue';
import BaseValidationMessage from './components/ui-element/BaseValidationMessage.vue';
import BaseTextAreaInput from './components/ui-element/BaseTextAreaInput.vue';
import BaseDeleteDialog from './components/ui-element/BaseDeleteDialog.vue';
import BaseTable from './components/ui-element/BaseTable.vue';
import BaseButtonContainer from './components/ui-element/BaseButtonContainer.vue';

import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/normalize.css";
import "./assets/css/font-awesome.css";
import router from './router.js'
import { createPinia } from 'pinia';
import configueAxios from './axios-config.js';
import './global.css'

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
app.component('base-validation-message', BaseValidationMessage)
app.component('base-textarea-input', BaseTextAreaInput)
app.component('base-delete-dialog', BaseDeleteDialog)
app.component('base-table', BaseTable)
app.component('base-button-container', BaseButtonContainer)

app.mount('#app')

