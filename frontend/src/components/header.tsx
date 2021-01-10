import React from 'react'

import { IsLoginPage, MessageLoginMgr } from "../services/loginServices";
import { useAuth } from "../services/authContextService"

import '../styles/header.css';


// Tipagem dos props do cabeçalho
interface HeaderProps {
    name: string;
    username?: string;
    url?: string;
}

// Cabeçalho do site
function Header(props: HeaderProps) {
    const name = props.name;
    const {name: username} = useAuth()
    // JSON de parâmetros de login
    const loginText = MessageLoginMgr({
        isLogged: true,
        notLoggedText: "É administrador? Faça login Aqui",
        loggedText: `Bem vindo! ${username}`
    })

    return (
        <>
            <header>
                <h1 className="header_logo">{name}</h1>
                <nav className="header_navbar">
                    <div className="admin_button">
                        <a hidden={IsLoginPage()} href="./login">
                            <h3>{loginText}</h3>
                        </a>
                    </div>
                </nav>
            </header>
            <nav className="navbar">
                <div className="admin_button">
                    <a hidden={IsLoginPage()} href="./login">
                        <h3>{loginText}</h3>
                    </a>
                </div>
            </nav>
        </>
    )
};

export default Header;