<script>
import axios from 'axios';
import { computed, ref } from 'vue';

const urlReplit = 'https://27499262-9023-401e-aa24-9c07eae665d0-00-1tjf1vaq9hopo.worf.replit.dev/'
const urlRailway = 'https://appnotas-backend-production.up.railway.app/'

export const lista = ref([])

export const atualizarInstanciaDeLista = async () =>
    await axios.get(`${urlRailway}readAllNotes`)
        .then((res) => lista.value = res.data).catch((error) => console.log(error))

export const adicionarNota = async (obj) => {
    await axios.post(`${urlRailway}create/`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista()
}

export const atualizarNota = async (id, obj) => {
    await axios.put(`${urlRailway}update/${id}`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista()
}

export const deletarNota = async (id) => {
    await axios.delete(`${urlRailway}remove/${id}`).then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista()
}
</script>