import React from 'react'
import '../styles/header.css';

// Cabeçalho do site

// Tipagem dos props do cabeçalho
interface HeaderProps {
    name: string;
    username ?: string;
    notLoggedText: string;
    loggedText: string;
}

// Tipagem das mensagens de login do cabeçalho
interface MessageLoginTypes {
    isLogged: boolean,
    notLoggedText: string,
    loggedText: string
}

// Função que entrega a mensagem de login adequada
function MessageLoginMgr ({ isLogged, loggedText, notLoggedText }: MessageLoginTypes) {
    if (isLogged) {
        loginText = loggedText
        return loginText
    }
    else {
        var loginText = notLoggedText
        return loginText
    }
}

function Header(props: HeaderProps) {
    const name = props.name;

    const loginText = MessageLoginMgr({
        isLogged: true,
        loggedText: props.loggedText,
        notLoggedText: props.notLoggedText
    });

    return (
        <>
            <header>
                <h1 className="header_logo">{name}</h1>
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