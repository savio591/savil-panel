import { useAuth } from "./authContextService";

interface UserData {
    name: string;
}
interface UseAuth {
    userData?: UserData;
    isLogged: boolean;
    username?: string;
}

export function IsLogged():UseAuth {
    const {user: userData} = useAuth().data;
    if (userData) {
        return { isLogged: true, username: userData.name }
    }
    else {
        return { isLogged: false }
    }

}

// Função que entrega a mensagem de login adequada
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

// Função que retorna um boolean se é a página de login
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