<script setup>

import { ref } from 'vue';
import router from '@/routes';
import { lista } from '@/asyncFunctions.vue';

const termo = ref('')

const filtrar = () => !termo ? lista.value : lista.value.filter(x => x.titulo.toLowerCase().includes(termo.value.toLowerCase()))

const navegarParaCriar = () => router.push('/criar')

const atualizarNota = (obj) => router.push(`/atualizar/${obj.id}`)

</script>

<template>
  <div class="espaco">

    <input v-model="termo" placeholder="Título a pesquisar" />
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
  margin-top: 100px;
}
</style>


<style scoped>
.espaco {
  padding-top: 95px;
  border: 1px solid transparent;
}

input {
  z-index: 10;
  position: fixed;
  top: 0;
  width: calc(100% - 45px);
  height: 50px;
  border-radius: 5px;
  margin: 20px 20px 0;
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
  height: calc(100vh - 100px);
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
}

p {
  font-size: 15px;
  margin: 0
}
</style>