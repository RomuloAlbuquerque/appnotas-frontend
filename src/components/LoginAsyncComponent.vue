<script setup>
import router from '@/routes';
import { reactive, ref } from 'vue';
import { verificarLogin, cadastrarUsuario } from '@/asyncFunctions.vue';

const nome = ref('')
const email = ref('')
const senha = ref('')
const msg = ref('Login')
const invisible = ref('hidden')

const login = async () => {
  if (!email.value || !senha.value) {
    msg.value = 'Os dados não podem estar vazios'
  } else {
     const usuario = await verificarLogin({ email: email.value, senha: senha.value })
    if (!usuario) {
      nome.value = ''
      senha.value = ''
      invisible.value = ''
      msg.value = 'não encontrado, preencha os dados e clique em cadastrar'
    } else {
      router.push(`/ler/${usuario.id}`)
    }
  }
}

const cadastrar = async () => {
  if (!nome.value || !email.value || !senha.value) {
    msg.value = 'Os dados não podem estar vazios'
  }
  await cadastrarUsuario({ nome: nome.value, email: email.value, senha: senha.value })
  login()
}
</script>

<template>
  <div class="principal">
    <h1 class="tituloLogin">{{ msg }}</h1>
    <div class="form">
      <input :style="{ visibility: invisible }" v-model="nome" placeholder="nome" />
      <input class="inputEmail" v-model="email" placeholder="email" />
      <input class="inputSenha" v-model="senha" placeholder="senha" />
      <button class="botaoLogar" @click="login">Login</button>
    </div>
    <button class="botaoCadastrar" @click="cadastrar">Cadastrar</button>
  </div>
</template>

<style scoped>
.principal {
  border: 1px solid black;
  background-color: #ffeb3b;
  height: 100vh;
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tituloLogin {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: lighter;
  text-transform: uppercase;
  text-align: center;
  color: black;
}

.form {
  border: 1px solid transparent;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

input {
  height: 25px;
  border-radius: 5px;
  border: 1px solid transparent;
  text-align: center;
}

button {
  height: 30px;
  width: 70px;
  border: 1px solid transparent;
  border-radius: 5px;
}

.botaoCadastrar {
  margin: 100px;
}
</style>