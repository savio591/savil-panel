import React from 'react'
import Header from './components/header'
import LoginContainer from './components/loginContainer'
import Footer from './components/footer'
import { AuthProvider } from './services/authContextService'


const LoginPage: React.FC = () => {
    return (
        <>
            <AuthProvider>

                <Header
                    name="Savil Panel"
                />

                <LoginContainer />
                <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
            </AuthProvider>
        </>
    )
}

export default LoginPage