<script setup>
import router from '@/routes';
import { ref } from 'vue';
import { verificarLogin, cadastrarUsuario } from '@/asyncFunctions.vue';

const nome = ref('')
const email = ref('')
const senha = ref('')
const msg = ref('Login')
const invisible = ref('hidden')
const displaylogin = ref('')
const displaycadastrar = ref('none')
const nomeBotaoCadastrar = ref('Cadastrar')

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
      displaylogin.value = 'none'
      displaycadastrar.value = ''
    } else {
      router.push(`/ler/${usuario.id}/${usuario.nome}`)
    }
  }
}

const cadastrar = async () => {
  if (!nome.value || !email.value || !senha.value) {
    msg.value = 'Os dados não podem estar vazios'
  }else{
  await cadastrarUsuario({ nome: nome.value, email: email.value, senha: senha.value })
  login()
  }
}

const mudarNomeBotao = () => {
  if(nome.value !== '' && email.value !== '' && senha.value !== ''){
    nomeBotaoCadastrar.value = 'Cadastrar e Fazer Login'
  }
}
</script>

<template>
  <div class="principal">
    <h1 class="tituloLogin">{{ msg }}</h1>
    <div class="form">
      <input :style="{ visibility: invisible }" v-model="nome" placeholder="nome" />
      <input class="inputEmail" v-model="email" placeholder="email" />
      <input class="inputSenha" v-model="senha" @keypress="mudarNomeBotao" placeholder="senha" />
      <button class="btnLoginCadastrar" :style="{ display: displaylogin }" @click="login">Login</button>
    </div>
    <button class='btnLoginCadastrar' :style="{ display: displaycadastrar }" @click="cadastrar">{{nomeBotaoCadastrar}}</button>
  </div>
</template>

<style scoped>
.principal {
  border: 1px solid transparent;
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
  margin-top: 80px;
}

.form {
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btnLoginCadastrar{
  border: 1px solid transparent;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100px;
  color: #312d2d;
  font-weight: bold;
  width: 100px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.1)
}

input {
  height: 25px;
  border-radius: 5px;
  border: 1px solid transparent;
  text-align: center;
  margin: 20px 0;
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