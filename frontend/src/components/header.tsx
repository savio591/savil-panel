import React from 'react'

import '../styles/header.css';
import Nav from './nav';


// Tipagem dos props do cabeçalho
interface HeaderProps {
    titleName: string;
    url?: string;
}

// Cabeçalho do site
function Header(props: HeaderProps) {
    const titleName = props.titleName;

    return (
        <>
            <header>
                <h1 className="header_logo">{titleName}</h1>
                <Nav type="header_navbar" />
            </header>
            <Nav type="navbar"/>
        </>
    )
};

export default Header;