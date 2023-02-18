import { createWebHistory,createRouter} from "vue-router";

//Les composants 
import Home from '../Pages/Home.vue';
import Service from '../Pages/Service.vue';
import Realisation from '../Pages/Realisation.vue';
import Appropos from '../Pages/Appropos.vue';
const routes = [
    {
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        name : 'Service',
        path : '/Service',
        component : Service
    },
    {
        name : 'Realisation',
        path : '/Realisation',
        component : Realisation
    },
    {
        name : 'Appropos',
        path : '/Appropos',
        component : Appropos
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;