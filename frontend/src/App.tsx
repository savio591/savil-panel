import React from "react";
import Header from "./components/header";
import Footer from "./components/footer"
import "./styles/main.css"

const App: React.FC = () => {
  return (
    <>
      <Header name="Savil Panel" />
      <h1>Hello world</h1>
      <Footer copyrightText="2021 Savio Castelo" />
    </>
  )
}

export default App;
