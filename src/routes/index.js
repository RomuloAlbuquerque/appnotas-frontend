import { createWebHistory, createRouter } from "vue-router";
import Atualizar from "@/views/Atualizar.vue";
import Criar from "@/views/Criar.vue";
import Ler from "@/views/Ler.vue";

const routes = [
    {path: '/', component: Ler},
    {path: '/criar', component: Criar},
    {path: '/atualizar/:id', component: Atualizar}
    // {path: '/buscarUsuario/:id', component: buscarUsuario}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router