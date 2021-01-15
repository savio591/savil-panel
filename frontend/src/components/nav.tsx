import React from 'react';
import { FiSliders, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../services/authContextService'; // Api de contexto de autenticação
import { IsLogged, IsLoginPage, MessageLoginMgr } from '../services/loginServices';
import { IsDashboardPage } from '../services/crudServices'

interface NavProps {
    type: string;
}

export default function Nav(props: NavProps) {
    const type = props.type
    const loginText = MessageLoginMgr()

    if (type == "header_navbar") return (
        <nav className="header_navbar"> {/* Mensagens e navegação para desktops */}
            <div className="signin_button" hidden={IsLoginPage() || IsLogged().isLogged}>
                <a href="./login">
                    <h3>{loginText}</h3>
                </a>
            </div>
            <div hidden={!IsLogged().isLogged} className="admin_nav">
                <h3>{loginText}</h3>
                <ul className="admin_nav_buttons">
                    <li hidden={IsDashboardPage()} className="button">
                        <a href="./dashboard">
                            <FiSliders color="#c9c9c9" size={16} /><p>Painel</p>
                        </a>
                    </li>
                    <li className="button">
                        <a onClick={useAuth().signOut}>
                            <FiLogOut color="#c9c9c9" size={16} /><p>Sair</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    else return (
        <nav hidden={IsLoginPage()} className="navbar"> {/* Mensagens e navegação para disositivos móveis */}
            <div hidden={IsLogged().isLogged} className="signin_button" >
                <a href="./login">
                    <h3>{loginText}</h3>
                </a>
            </div>
            <div className="admin_nav" hidden={IsLoginPage() || !IsLogged().isLogged}>
                <h3>{loginText}</h3>
                <ul className="admin_nav_buttons">
                    <li hidden={IsDashboardPage()} className="button">
                        <a href="./dashboard">
                            <FiSliders color="#c9c9c9" size={16} /><p>Painel</p>
                        </a>
                    </li>
                    <li className="button">
                        <a onClick={useAuth().signOut}>
                            <FiLogOut color="#c9c9c9" size={16} /><p>Sair</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}