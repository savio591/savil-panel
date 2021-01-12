import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

// Observador de erros que retorna dados para apis de contexto
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}