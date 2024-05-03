<script setup>

import { ref } from 'vue';
import router from '@/routes';
import { lista, atualizarInstanciaDeLista } from '@/asyncFunctions.vue';

const iduser = ref(router.currentRoute.value.params.iduser)
const nome = ref(router.currentRoute.value.params.nome)
console.log(nome.value)

atualizarInstanciaDeLista(iduser.value)

const termo = ref('')

const filtrar = () => !termo ? lista.value : lista.value.filter(x => x.titulo.toLowerCase().includes(termo.value.toLowerCase()))

const navegarParaCriar = () => router.push(`/criar/${iduser.value}/${nome.value}`)

const atualizarNota = (obj) => router.push(`/atualizar/${obj.id}/${iduser.value}/${nome.value}`)

const sair = () => router.push(`/`)

</script>

<template>
  <div class="espaco">
    <div class="caixainput">
      <div class="caixa-sair-ola">
      <button class="sair" @click="sair">Sair</button>
      <h1 class="nome">Olá {{ nome }}</h1>
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
    <button class="botaoMais" @click="navegarParaCriar">
      +
    </button>
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
}
.caixainput{
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 130px;
  border: 1px solid transparent;
}

.caixa-sair-ola{
  border: 1px solid transparent;
  display: flex;
  height: 40px;
  padding: 10px 20px 0;
  justify-content: space-between;
  align-items: center;
  
}

.sair{
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 30px;
  background-color: #ffeb3b;
  color: #706969;
}

.nome{
  /* padding: 10px 20px 0; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
}

input {
  padding: 0 10px;
  width: calc(100% - 65px);
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
  padding: 0 10px;
  height: calc(100vh - 140px);
  background-color: #f5f5f5;
  overFlow-y: auto;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

li {
  max-height: 150px;
  overflow: hidden;
  list-style: none;
  border-radius: 5px;
  width: calc(50% - 40px);
  min-height: 50px;
  margin: 0 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
}

.botaoMais {
  height: 50px;
  width: 50px;
  background-color: #ffeb3b;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  color: #333;

  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 50px;

}

h1 {
  font-size: 20px;
  margin: 0 0 5px;
  font-weight: lighter;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

p {
  font-size: 15px;
  margin: 0
}
</style>