import React from 'react'

import { IsLoginPage, MessageLoginMgr } from "../services/loginServices";

import '../styles/header.css';


// Tipagem dos props do cabeçalho
interface HeaderProps {
    titleName: string;
    url?: string;
}

// Cabeçalho do site
function Header(props: HeaderProps) {
    const titleName = props.titleName;

    // JSON de parâmetros de login
    const loginText = MessageLoginMgr()

    return (
        <>
            <header>
                <h1 className="header_logo">{titleName}</h1>
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