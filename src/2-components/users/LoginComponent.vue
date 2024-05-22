<script setup>
import router from '../../4-routes';
import { ref } from 'vue';
import { cadastrarUsuario } from '../../3-services/httpRequests/notes/asyncFunctions.vue';
import userSecurity from '../../3-services/security/users/userSecurity.js';


const nome = ref('')
const email = ref(localStorage.getItem('email'))
const senha = ref(localStorage.getItem('senha'))
const msg = ref('Acessar Minhas Notas')
const none = ref('none')
const nomeBotao = ref('Entrar')
const login = async () => {
  const { auth, message, user } = await userSecurity.authenticate({ email: email.value, senha: senha.value })
  auth == false
    ? msg.value = message
    : (router.push(`/ler/${user.id}/${user.nome}`), localStorage.setItem('email', email.value), localStorage.setItem('senha', senha.value))

}

const cadastrar = async () => {
  if (!nome.value || !email.value || !senha.value) {
    msg.value = 'Os dados não podem estar vazios'
  } else {
    await cadastrarUsuario({ nome: nome.value, email: email.value, senha: senha.value })
    login()
  }
}

const loginPolimorfico = () => {
  if (nomeBotao.value == 'Entrar') {
    return login()
  } else {
    return cadastrar()
  }
}

const mostrarFormCadastrar = () => {
  nomeBotao.value = 'Cadastrar'
  none.value = ''
}
</script>


<template>

  <div class="h-dvh flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-blue-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm titulo">
      <img class="mx-auto h-12 w-auto" src="/src/2-components/icons/IconNote.png" alt="Loyal Notas" />
      <h2 class="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">{{ msg }}</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm caixa-form">
      <form class="space-y-6" @submit.prevent="loginPolimorfico">
        <div>
          <div class="mt-2" :style="{ display: none }">
            <input v-model="nome" placeholder="nome" type="text"
              class="focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="mt-2">
            <input v-model="email" placeholder="email" type="text"
              class="focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="mt-2">
            <input v-model="senha" placeholder="senha" type="password" autocomplete="current-password"
              class="focus:outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="bg-gradient-to-t from-gray-600 via-gray-500 to-gray-600 flex w-full justify-center rounded-md px-3 py-1.5 font-semibold leading-6 
            text-white text-base shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
              nomeBotao }}</button>
        </div>
      </form>

      <p class="mt-10 text-center text-lg text-black-500 font-semibold">Se esqueceu sua senha </p>
      <p class="text-center"><a href="#" class="text-xl font-bold leading-6 text-red-600 hover:text-indigo-500">Vamos
          Recuperar</a></p>
      <br>
      <p class="mt-10 text-center text-lg text-black-500 font-bold"><a href="#" @click="mostrarFormCadastrar">Ou fazer cadastro</a> </p>
    </div>
  </div>
</template>

<style scoped>
input {
  padding-left: 10px;
  background-color: rgb(233, 230, 230);
}

.caixa-form {
  margin-top: 15px;
}

img {
  padding-left: 10px
}
</style>
