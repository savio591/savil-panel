

// Tipagem das mensagens de login do cabeçalho
interface MessageLoginTypes {
    isLogged: boolean,
    notLoggedText: string,
    loggedText: string
}

// Função que entrega a mensagem de login adequada
export function MessageLoginMgr({ isLogged, loggedText, notLoggedText }: MessageLoginTypes) {
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

    if (url == "http://localhost:9000/login/") {
        const isLoginPage: boolean = true
        return isLoginPage
    }
    else {
        const isLoginPage = false
        return isLoginPage
    }
}