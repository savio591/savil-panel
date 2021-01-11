import React from 'react'

import Header from './components/header'
import LoginContainer from './components/loginContainer'
import Footer from './components/footer'

import { AuthProvider } from './services/authContextService'
import { ToastProvider } from './services/toastServices'


const LoginPage: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <ToastProvider>
                    <Header
                        titleName="Savil Panel"
                    />
                    <LoginContainer />

                    <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
                </ToastProvider>
            </AuthProvider>


        </>
    )
}

export default LoginPage