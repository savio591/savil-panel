import React from "react";

import Header from "./components/header";
import ProductsList from "./components/products";
import Footer from "./components/footer";
import "./styles/main.css"

const App: React.FC = () => {
  const username = "admin" // Até os serviços de login ainda não estiverem criados

  return (
    <>
      <Header
        name="Savil Panel"
        notLoggedText="É administrador? Faça login Aqui"
        loggedText= {`Bem vindo! ${username}`}
      />
      <ProductsList productTitle="Lista de produtos"/>
      <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
    </>
  )
}

export default App;