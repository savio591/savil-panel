import React from 'react';
import { render } from 'react-dom';

// Páginas
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import DashboardPage from './pages/dashboardPage'

import './styles/reset.css' // Reset de estilos do navegador

const url = document.URL // Recebe a url atual do navegador

// Switch de rotas estáticas para Github Pages.
// Seria possível utilizar o switch, location e history, routes do próprio react, 
// porém encontrei problemas com o meu servidor estático, além do
// react só poder renderizar um DOM dentro de apenas uma id

// A solução foi o uso da condicional switch do javascript.
switch (true) {
    case url.endsWith("/login/"):
        render(
            <LoginPage />, document.getElementById('login'))
        break;
    case url.endsWith("/dashboard/"):
        render(
            <DashboardPage />, document.getElementById('dashboard'));
        break;
    default:
        render(
            <HomePage />, document.getElementById('app'))
            break;
}