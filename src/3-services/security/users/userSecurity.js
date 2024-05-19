import { login } from "../../httpRequests/notes/asyncFunctions.vue"
import router from "../../../4-routes"

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
            }
        }
        return result
    },


    token: () => {
        return { headers: { 'x-access-token': localStorage.getItem('token') } }
    },

    notAuthorized: async (result) => {
        if (result.auth == false) {
            localStorage.removeItem('token')
            console.log(result.message)
            return router.push('/')
        }
    },

    destroyToken: () => (localStorage.removeItem('token'), console.log('token destruido'))

}

export default security