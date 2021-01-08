import React from 'react';
import { render } from 'react-dom';

import App from './App'
import LoginPage from './loginPage'

import './styles/reset.css'
const url = document.URL

// Gambiarra de rotas estáticas para github pages
if (url.endsWith("/login/")) {
    render(
        <LoginPage />, document.getElementById('login'))
}
else {
    render(
        <App />, document.getElementById('app'))
}