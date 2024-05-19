<script>
import axios from 'axios';
import { ref } from 'vue';
import userSecurity from '../../security/users/userSecurity.js';
import security from '../../security/users/userSecurity.js';

const local = 'http://localhost:3001/'
const replit = 'https://27499262-9023-401e-aa24-9c07eae665d0-00-1tjf1vaq9hopo.worf.replit.dev/'
const railway = 'https://appnotas-backend-production.up.railway.app/'
const servidorAtual = ref(railway)

export const lista = ref([])

export const atualizarInstanciaDeLista = async (iduser) => {
    const result = await axios.get(`${servidorAtual.value}readAllNotes/${iduser}`, userSecurity.token())
    result.data.auth == true ? lista.value = result.data.list : security.notAuthorized(result.data)
}

export const adicionarNota = async (obj) => {
    await axios.post(`${servidorAtual.value}create/`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista(obj.iduser)
}
export const atualizarNota = async (idnota, obj) => {
    await axios.put(`${servidorAtual.value}update/${idnota}`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista(obj.iduser)
}
export const deletarNota = async (idnota, iduser) => {
    await axios.delete(`${servidorAtual.value}remove/${idnota}`).then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista(iduser)
}
//usuarios
export const cadastrarUsuario = async (obj) => {
    await axios.post(`${servidorAtual.value}createUser/`, obj)
        .catch((error) => console.log(error))
}
export const login = async (obj) =>
    await axios.post(`${servidorAtual.value}checkLogin/`, obj).then((res) => res.data)
        .catch((error) => console.log(error))

</script>