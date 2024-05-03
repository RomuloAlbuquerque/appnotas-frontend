<script>
import axios from 'axios';
import { ref } from 'vue';

const local = 'http://localhost:3001/'
const urlReplit = 'https://27499262-9023-401e-aa24-9c07eae665d0-00-1tjf1vaq9hopo.worf.replit.dev/'
const urlRailway = 'https://appnotas-backend-production.up.railway.app/'

export const lista = ref([])

export const atualizarInstanciaDeLista = async (iduser) => {
    await axios.get(`${urlRailway}readAllNotes/${iduser}`)
        .then((res) => lista.value = res.data).catch((error) => console.log(error))
}

export const adicionarNota = async (obj) => {
    await axios.post(`${urlRailway}create/`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista(obj.iduser)
}
export const atualizarNota = async (idnota, obj) => {
    await axios.put(`${urlRailway}update/${idnota}`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista(obj.iduser)
}
export const deletarNota = async (idnota, iduser) => {
    await axios.delete(`${urlRailway}remove/${idnota}`).then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista(iduser)
}
//usuarios
export const cadastrarUsuario = async (obj) => {
    await axios.post(`${urlRailway}createUser/`, obj)
        .catch((error) => console.log(error))
}
export const verificarLogin = async (obj) =>
    await axios.post(`${urlRailway}checkLogin/`, obj).then((res) => res.data)
        .catch((error) => console.log(error))

</script>