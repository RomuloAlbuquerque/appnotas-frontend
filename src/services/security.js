import { login } from "@/asyncFunctions.vue"
import router from "@/routes"

const security = {
    authenticate: async (credenciais) => {
        const result = { auth: false, message: '', user: undefined }
        let token
        if (!credenciais.email || !credenciais.senha) {
            result.message = 'Os campos de credenciais não podem estar vazios'
        } else {
            result.user = await login(credenciais)
            if (!result.user) {
                result.message = 'E-mail e/ou senha inválidos'
            } else {
                result.auth = true
                result.message = 'Login com sucesso'
                token = result.user.token
                localStorage.setItem('token', token)
                console.log(localStorage)
            }
        }
        return result
    },


    token: { headers: { 'x-access-token': localStorage.getItem('token') } },

    authorize : async (result) => {
        if (result == 'jwt expired') {
            localStorage.removeItem('token')
            console.log(localStorage)
            return router.push('/')
        }else{
            return result
        }
    }



}

export default security