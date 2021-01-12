import React from "react";

import "../styles/main.css"
import Header from "../components/header";
import ProductsList from "../components/productsContainer";
import Footer from "../components/footer";
import { AuthProvider } from "../services/authContextService";


const HomePage: React.FC = () => (
    <>
        <AuthProvider>
            <Header titleName="Savil Panel" />
            <ProductsList productTitle="Lista de produtos" />
            <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
        </AuthProvider>
    </>
)

export default HomePage;