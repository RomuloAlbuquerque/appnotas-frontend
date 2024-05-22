<script setup>

import { ref } from 'vue';
import router from '../../4-routes';
import { lista, atualizarInstanciaDeLista } from '../../3-services/httpRequests/notes/asyncFunctions.vue';
import security from '@/3-services/security/users/userSecurity';

const iduser = ref(router.currentRoute.value.params.iduser)
const nome = ref(router.currentRoute.value.params.nome)

atualizarInstanciaDeLista(iduser.value)

const termo = ref('')

const filtrar = () => !termo ? lista.value : lista.value.filter(x => x.titulo.toLowerCase().includes(termo.value.toLowerCase()))

const navegarParaCriar = () => router.push(`/criar/${iduser.value}/${nome.value}`)

const atualizarNota = (obj) => router.push(`/atualizar/${obj.id}/${iduser.value}/${nome.value}`)

const sair = () => (security.destroyToken(), router.push(`/`))

</script>

<template>
  <div class="espaco">
    <div class="caixainput">
      <div class="caixa-sair-ola">
        <button class="sair" @click="sair">Sair</button>
        <h1 class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 border">{{ nome }}</h1>
      </div>
      <input v-model="termo" placeholder="Título a pesquisar" />
    </div>
    <div class="div">
      <ul>
        <li v-for="obj in filtrar()" :key="obj.id" @click="atualizarNota(obj)">
          <h1>{{ obj.titulo }}</h1>
          <p>{{ obj.nota }}</p>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center">
  <button @click="navegarParaCriar" class="botaoMais bg-gradient-to-t from-blue-400 via-blue-300 to-blue-500">
    <p>+</p>
  </button>
</div>
  </div>
</template>

<style scoped>
ul {
  margin-top: 170px;
}
</style>


<style scoped>
.espaco {
  padding-top: 130px;
  border: 1px solid transparent;
  width: 100%;
}

.caixainput {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 130px;
  border: 1px solid transparent;
}

.caixa-sair-ola {
  border: 1px solid transparent;
  display: flex;
  height: 40px;
  padding: 10px 20px 0;
  justify-content: space-between;
  align-items: center;

}

.sair {
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 30px;
  background-color: #1E90FF;
  /* background-color: #ffeb3b; */
  color: white;
  font-weight: 500;
  width: 50px;
}

.nome {
  /* padding: 10px 20px 0; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
}

input {
  padding: 0 10px;
  width: calc(100% - 40px);
  height: 50px;
  border-radius: 5px;
  margin: 10px 20px 0;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.div {
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  height: calc(100vh - 140px);
  background-color: #f5f5f5;
  overFlow-y: auto;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 8px;
}

li {
  max-height: 150px;
  overflow: hidden;
  list-style: none;
  border-radius: 5px;
  width: 43%;
  min-height: 50px;
  margin: 0 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.botaoMais {
  height: 50px;
  width: 50px;
  background-color: #1E90FF;
  /* background-color: #ffeb3b; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.botaoMais p{
  font-size: 40px;
  /* color: rgb(53, 52, 52); */
  color: black;
  font-weight: 700;
}


h1 {
  font-size: 13px;
  margin: 0 0 5px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

p {
  font-size: 12px;
  margin: 0
}
</style>