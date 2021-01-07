import React from 'react'
import '../styles/header.css';

// Cabeçalho do site

// Tipagem de variáveis 
interface HeaderProps {
    name: string;
    adminButtonText ?: string;
}

function Header(props: HeaderProps) {
    const name = props.name;
    const adminButtonText = props.adminButtonText;

    return (
        <>
            <header>
                <h1 className="header_logo">{name}</h1>
            </header>
            <nav className="navbar">
                <div className="admin_button">
                    <h3>{adminButtonText}</h3>
                </div>
            </nav>
        </>
    )
};

export default Header;