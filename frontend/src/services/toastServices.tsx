import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';

// Tipagem da mensagem de toast
export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

// Tipagem das funções de toast
interface ToastContextData {
  addToast(messages: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

// Cria a api de contexto dos Toasts
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// Provedor dos toasts
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

// Chama o toast de mensagens no frontend através dos dados do Provedor
function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado no ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };