import React from 'react'

import Header from './components/header'
import LoginContainer from './components/loginContainer'
import Footer from './components/footer'

import AppProvider from './hooks'

const LoginPage: React.FC = () => {
    return (
        <>
            <AppProvider>
                <Header titleName="Savil Panel" />
                <LoginContainer />
            </AppProvider>
            <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
        </>
    )
}

export default LoginPage