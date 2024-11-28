import { useCallback, useState } from 'react';
import {
  ISignInFormData,
  ISignUpFormData,
  TAuthFormType,
} from './AuthForm.types';

export const useAuthForm = (
  type: TAuthFormType,
  initialState: ISignInFormData | ISignUpFormData,
) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

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
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  }, [formData]);

  return {
    loading,
    formData,
    handleChange,
    handleSubmit,
  };
};
