import React from 'react'

import { IsLoginPage, MessageLoginMgr } from "../services/loginServices";

import '../styles/header.css';

// Cabeçalho do site

// Tipagem dos props do cabeçalho
interface HeaderProps {
    name: string;
    username?: string;
    notLoggedText: string;
    loggedText: string;
    url?: string;
}


function Header(props: HeaderProps) {
    const name = props.name;


    const loginText = MessageLoginMgr({
        isLogged: false,
        loggedText: props.loggedText,
        notLoggedText: props.notLoggedText
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
                    <h3>{loginText}</h3>
                </div>
            </nav>
        </>
    )
};

export default Header;