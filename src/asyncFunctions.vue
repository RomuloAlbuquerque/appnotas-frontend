<script>
import axios from 'axios';
import { ref } from 'vue';

const urlReplit = 'https://27499262-9023-401e-aa24-9c07eae665d0-00-1tjf1vaq9hopo.worf.replit.dev/'

export const lista = ref(await axios.get(`${urlReplit}readAllNotes`)
        .then((res) => res.data).catch((error) => console.log(error)))

export const atualizarInstanciaDeLista = async () =>
    await axios.get(`${urlReplit}readAllNotes`)
        .then((res) => lista.value = res.data).catch((error) => console.log(error))

export const adicionarNota = async (obj) => {
    await axios.post(`${urlReplit}create/`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista()
}

export const atualizarNota = async (id, obj) => {
    await axios.put(`${urlReplit}update/${id}`, obj)
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista()
}

export const deletarNota = async (id) => {
    await axios.delete(`${urlReplit}remove/${id}`).then((res) => console.log(res.data))
        .catch((error) => console.log(error))
    atualizarInstanciaDeLista()
}
</script>