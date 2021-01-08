import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

const LoginPage: React.FC = () => {
    const username = "Savil"
    return (
        <>
            <Header
                name="Savil Panel"
                notLoggedText="É administrador? Faça login Aqui"
                loggedText={`Bem vindo! ${username}`}
            />
            <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
            <h1>Test</h1>
        </>
    )
}

export default LoginPage