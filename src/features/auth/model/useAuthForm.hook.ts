import { useCallback, useEffect, useState } from 'react';
import { TAuthForm, TAuthFormType } from './AuthForm.types';
import { formValidation } from 'src/features/auth/model/AuthFormValidation';

export const useAuthForm = (type: TAuthFormType, initialState: TAuthForm) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  const handleChange = useCallback(
    (name: keyof TAuthForm, value: string) => {
      setFormData((prev) => {
        const error = formValidation(name, value, prev);
        return {
          ...prev,
          [name]: { ...prev[name], value, error },
        };
      });
    },
    [formData],
  );

  const handleBlur = useCallback(
    (name: keyof TAuthForm, value: string) => {
      setFormData((prev) => {
        const error = formValidation(name, value, prev);
        return {
          ...prev,
          [name]: { ...prev[name], isTouched: true, error },
        };
      });
    },
    [formData],
  );

  const handleSubmit = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        if (type === 'signup') {
          console.log('SIGN_UP FORM_DATA', formData);
        } else {
          console.log('SIGN_IN FORM_DATA', formData);
        }
      } catch (error) {
        console.log('SUBMIT_ERROR', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  }, [formData]);

  useEffect(() => {
    const isFormDataValid = Object.values(formData).every(
      ({ value, validation, error }) => !validation || (value && !error),
    );
    setFormValid(isFormDataValid);
  }, [formData]);

  return {
    loading,
    formData,
    handleChange,
    handleSubmit,
    handleBlur,
    isFormValid,
  };
};
