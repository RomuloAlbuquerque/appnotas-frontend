import { createWebHistory, createRouter } from "vue-router";
import Atualizar from "@/views/Atualizar.vue";
import Criar from "@/views/Criar.vue";
import Ler from "@/views/Ler.vue";
import Login from "@/views/Login.vue";

const routes = [
    {path: '/', component: Login},
    {path: '/ler/:iduser', component: Ler},
    {path: '/criar/:iduser', component: Criar},
    {path: '/atualizar/:idnota/:iduser', component: Atualizar},

    // {path: '/buscarUsuario/:id', component: BuscarUsuario},
    // {path: '/criarUsuario/', component: CriarUsuario}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router