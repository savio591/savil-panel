import React from 'react'
import '../styles/header.css';

function Header(props: { name: string; }) {
    const name = props.name
    return (
        <header>
            <h1 className="header_logo">{name}</h1>
        </header>
    )
};

export default Header;
