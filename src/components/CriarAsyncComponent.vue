<script setup>
import { ref } from 'vue'
import router from '../routes'
import { adicionarNota, atualizarInstanciaDeLista } from '@/asyncFunctions.vue';

const iduser = ref(router.currentRoute.value.params.iduser)
const nome = ref(router.currentRoute.value.params.nome)
console.log(nome.value)

atualizarInstanciaDeLista(iduser.value)

const titulo = ref('')
const nota = ref('')

const salvarNovaNota = () => titulo.value || nota.value ? (adicionarNota({ titulo: titulo.value, nota: nota.value, iduser: iduser.value }), router.push(`/ler/${iduser.value}/${nome.value}`)) : router.push(`/ler/${iduser.value}/${nome.value}`)
</script>

<template>
  <div class="caixa">

    <button @click="salvarNovaNota" class="botaoVoltar bg-gradient-to-t from-yellow-400 via-yellow-300 to-yellow-500">
      <p>&lt;</p>
    </button>

    <input v-model="titulo" placeholder="Título">
    <textarea v-model="nota" placeholder="Nota">
    </textarea>
  </div>
</template>


<style scoped>
.caixa {
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
  font-weight: 700;
}

input,
textArea {

  height: 10px;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 15px;
}

textArea {
  min-height: 400px;
}
</style>