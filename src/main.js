
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import i18n from './locale/i18n.js'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';

const app = createApp(App)

app.use(router);
app.use(PrimeVue);
app.use(i18n);
app.component('pv-toolbar',Toolbar);
app.component('pv-button',Button);
app.component('pv-card',Card)
app.component('pv-datatable',DataTable);
app.component('pv-column',Column);
app.component('pv-columnGroup',ColumnGroup);
app.component('pv-row',Row);


app.mount('#app')
