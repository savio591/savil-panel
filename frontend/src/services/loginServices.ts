import { useAuth } from "./authContextService";

interface UserData {
    name: string;
}
interface UseAuth {
    userData?: UserData;
    isLogged: boolean;
    username?: string;
}

// Serviço que retorna um boolean sobre se o usuário estiver logado
export function IsLogged():UseAuth {
    const {user: userData} = useAuth().data;
    if (userData) {
        return { isLogged: true, username: userData.name }
    }
    else {
        return { isLogged: false }
    }

}

// Serviço que entrega a mensagem de login do cabeçalho da página
export function MessageLoginMgr() {
    const {isLogged, username} = IsLogged()
    const notLoggedText = "É administrador? Faça login Aqui";
    const loggedText = `Bem vindo! ${username}`

    if (isLogged) {
        loginText = loggedText
        return loginText
    }
    else {
        var loginText = notLoggedText
        return loginText
    }
}

// Serviço que retorna um boolean se é a página de login
export function IsLoginPage() {
    const url = document.URL

    if (url.endsWith("/login/")) {
        const isLoginPage: boolean = true
        return isLoginPage
    }
    else {
        const isLoginPage = false
        return isLoginPage
    }
}