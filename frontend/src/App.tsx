import React from "react";

import "./styles/main.css"
import Header from "./components/header";
import ProductsList from "./components/products";
import Footer from "./components/footer";
import { AuthProvider } from "./services/authContextService";


const App: React.FC = () => {
  const username = "John Cafe" // Até os serviços de login ainda não estiverem criados

  return (
    <>
      <AuthProvider>
        <Header
          name="Savil Panel"
          notLoggedText="É administrador? Faça login Aqui"
          loggedText={`Bem vindo! ${username}`}
        />
        <ProductsList productTitle="Lista de produtos" />
        <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
      </AuthProvider>
    </>
  )
}

export default App;