import React from 'react'

import Header from "../components/header";
import CrudContainer from "../components/crudContainer";
import Footer from "../components/footer";
import { AuthProvider } from "../services/authContextService";

const DashboardPage: React.FC = () => (
        <>
            <AuthProvider>
                <Header titleName="Savil Panel" />
                <CrudContainer />
                <Footer copyrightText="© 2021 -  Savio Henrique dos Santos Castelo." />
            </AuthProvider>
        </>
    )
    

export default DashboardPage