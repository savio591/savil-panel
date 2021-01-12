import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
    useCallback,
  } from 'react';
  import { IconBaseProps } from 'react-icons';
  import { FiAlertCircle } from 'react-icons/fi';
  import { useField } from '@unform/core';
  
  import { Container, Error } from './styles';
  
  // Tipagem dos props do conteúdo da entrada de texto
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
  }
  
  // Componente de entrada de texto
  const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const { fieldName, defaultValue, error, registerField } = useField(name);
  
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);
  
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
  
      setIsFilled(!!inputRef.current?.value);
    }, []);
  
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [fieldName, registerField]);
  
    return (
      <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          type="text"
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={32} />
          </Error>
        )}
      </Container>
    );
  };
  
  export default Input;