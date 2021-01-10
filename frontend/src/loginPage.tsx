import React from 'react'
import Header from './components/header'
import LoginContainer from './components/loginContainer'
import Footer from './components/footer'


const LoginPage: React.FC = () => {
    const username = "John Cafe"
    return (
        <>
            <Header
                name="Savil Panel"
                notLoggedText="É administrador? Faça login Aqui"
                loggedText={`Bem vindo! ${username}`}
            />
            
            <LoginContainer />
            <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
        </>
    )
}

export default LoginPage