import React from "react";

import "./styles/main.css"
import Header from "./components/header";
import ProductsList from "./components/products";
import Footer from "./components/footer";
import { AuthProvider } from "./services/authContextService";


const App: React.FC = () => (
    <>
      <AuthProvider>
        <Header
          name="Savil Panel"/>
        <ProductsList productTitle="Lista de produtos" />
        <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
      </AuthProvider>
    </>
  )

export default App;