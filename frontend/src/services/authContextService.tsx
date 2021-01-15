import React, { createContext, useCallback, useState, useContext, MouseEventHandler } from 'react';

import api from '../services/api';

interface SignInCredentials {
  username: string;
  password: string;
}

interface UserObject {
  name: string;
}

interface DataObject {
  user: UserObject;
  token: string;
}

interface AuthContextData {
  data : DataObject;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut: MouseEventHandler;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataObject>(() => {
    const token = localStorage.getItem('@SavilPanel:token');
    const user = localStorage.getItem('@SavilPanel:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as DataObject;
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

  const signOut = useCallback(() => {
    window.location.replace("../")
    localStorage.removeItem('@SavilPanel:token');
    localStorage.removeItem('@SavilPanel:user');

    setData({} as DataObject);
    
  }, [])

  return (
    <AuthContext.Provider value={{ data, signIn, signOut }}>
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