import React from "react";

import Header from "./components/header";
import ProductsList from "./components/products";
import Footer from "./components/footer";
import "./styles/main.css"

const App: React.FC = () => {

  return (
    <>
      <Header
        name="Savil Panel"
        adminButtonText="É administrador? Faça login <span>Aqui</span>"
      />
      <ProductsList productTitle="Lista de produtos"/>
      <Footer copyrightText="2021 Savio Castelo" />
    </>
  )
}

export default App;