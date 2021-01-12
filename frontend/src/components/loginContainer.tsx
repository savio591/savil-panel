import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import '../styles/login.css';
import Input from './Input';

import getValidationErrors from '../utils/getValidationErrors';
import { useAuth } from '../services/authContextService';
import { useToast } from '../services/toastServices';

interface SignInFormData {
  username: string;
  password: string;
}

function LoginContainer() {
  const { signIn } = useAuth();

  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('O usuário é admin'),
        password: Yup.string().required('A senha é savio05may123'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        username: data.username,
        password: data.password,
      });

      addToast({
        type: 'success',
        title: 'Aêe',
        description: 'Login feito com sucesso!',
      })

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        addToast({
          type: 'error',
          title: 'Dados vazios!',
          description: 'Insira as credenciais.',
        });
      }
      else {
        addToast({
          type: 'error',
          title: 'Algo errado não está certo',
          description: 'Nome de usuário ou senha incorreto, ou o servidor não está funcionando!',
        });
      }
    }
  }, [signIn, addToast]);

  return (
    <>
      <div className="loginContainer">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Login no Savil Panel</h2>

          <Input name="username" placeholder="Nome de usuário"></Input>
          <Input name="password" type="password" placeholder="Senha"></Input>
          <button type="submit">Entrar</button>
        </Form>
      </div>
    </>
  );
}

export default LoginContainer;

