import React from 'react';

import { AuthProvider } from '../services/authContextService';
import { ToastProvider } from '../services/toastServices';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;