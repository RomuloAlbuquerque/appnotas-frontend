import { createWebHistory, createRouter } from "vue-router";
import Atualizar from '../1-pages/notes/Atualizar.vue'
import Criar from '../1-pages/notes/Criar.vue'
import Ler from '../1-pages/notes/Ler.vue'
import Login from '../1-pages/users/Login.vue'

const routes = [
    {path: '/', component: Login},
    {path: '/ler/:iduser/:nome?', component: Ler},
    {path: '/criar/:iduser/:nome?', component: Criar},
    {path: '/atualizar/:idnota/:iduser/:nome?', component: Atualizar},

    // {path: '/buscarUsuario/:id', component: BuscarUsuario},
    // {path: '/criarUsuario/', component: CriarUsuario}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router