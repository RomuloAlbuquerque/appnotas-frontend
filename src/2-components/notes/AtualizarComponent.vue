<script setup>
import { ref } from 'vue';
import router from '../../4-routes';
import { atualizarInstanciaDeLista, atualizarNota, deletarNota, lista } from '../../3-services/httpRequests/notes/asyncFunctions.vue';

const idnota = ref(router.currentRoute.value.params.idnota)
const iduser = ref(router.currentRoute.value.params.iduser)
const nome = ref(router.currentRoute.value.params.nome)

atualizarInstanciaDeLista(iduser.value)

const objeto = lista.value.filter(x => x.id == idnota.value)[0]
const titulo = ref(objeto.titulo)
const nota = ref(objeto.nota)

const atualizar = () => objeto ? (atualizarNota(idnota.value, {titulo: titulo.value, nota: nota.value, iduser: iduser.value}), router.push(`/ler/${iduser.value}/${nome.value}`)) : router.push(`/ler/${iduser.value}/${nome.value}`)
const excluir = () => (deletarNota(idnota.value, iduser.value), router.push(`/ler/${iduser.value}/${nome.value}`))
</script>
titulo
<template>
<div class="caixa">
  <button @click="atualizar" class="botaoVoltar bg-gradient-to-t from-blue-400 via-blue-300 to-blue-500">
      <p>&lt;</p>
    </button>
  <input v-model="titulo">
  <textarea v-model="nota">
  </textarea>
  <button @click="excluir" class="botaoExcluir bg-gradient-to-t from-red-600 via-red-500 to-red-700">
      <p>X</p>
    </button>
</div>
</template>

<style scoped>
  .caixa{
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    height: calc(96vh);
    padding: 3% 5%; 
    color: #202124;
  }
  .botaoVoltar {
  height: 40px;
  width: 40px;
  background-color: #ffeb3b;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
}
.botaoVoltar p{
  font-size: 40px;
  color: rgb(53, 52, 52);
  color: black;
  font-weight: 700;
}
  input, textArea{
     height: 10px;
    padding: 20px;
     border-radius: 5px;
     margin: 10px;
     background-color: #fff;
     border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-size: 15px;
  }
  textArea{
    min-height: 500px;
  }
  .botaoExcluir{
    background-color: rgb(255, 74, 74);
    height: 30px;
    width: 30px;
    font-size: 20px;
    margin-left: calc(100% - 40px);
  }
  .botaoExcluir p{
    font-weight: bold;
  }
</style>
