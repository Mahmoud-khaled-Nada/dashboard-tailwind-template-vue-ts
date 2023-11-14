import { createApp } from 'vue'
import App from './App.vue'

/** Include General library */
import router from './router'
import { store, key } from './store'
/** Global styles with CSS modules */
import './style.css'

const app = createApp(App)

app.use(router)
app.use(store,key)



// Mount vue app
app.mount('#app')
