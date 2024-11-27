import { useState } from 'react';
import { TAuthFormType } from './AuthForm.types';

export const useAuthForm = (type: TAuthFormType) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
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
    }, 2000);
  };

  return { loading, handleChange, handleSubmit };
};
