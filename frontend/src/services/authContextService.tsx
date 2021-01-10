import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  name: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@SavilPanel:token');
    const user = localStorage.getItem('@SavilPanel:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@SavilPanel:token', token);
    localStorage.setItem('@SavilPanel:user', JSON.stringify(user));

    setData({ token, user });    

  }, []);

  return (
    <AuthContext.Provider value={{name: data.user.name , signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };