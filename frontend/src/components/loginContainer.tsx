import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import "../styles/login.css";

function LoginContainer() {
    return (
        <>
            <div className="loginContainer">
                <form>
                    <h2>Login no Savil Panel</h2>
                    <input placeholder="Nome de usuário"></input>
                    <input type="password" placeholder="Senha"></input>
                    <button type="submit">Entrar</button>
                </form>

            </div>
        </>
    )
}

export default LoginContainer