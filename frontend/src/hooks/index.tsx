import React from 'react';

import { AuthProvider } from '../services/authContextService';
import { ToastProvider } from '../services/toastServices';

// Provedor dos hooks de autenticação e das mensagens de toast
const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;