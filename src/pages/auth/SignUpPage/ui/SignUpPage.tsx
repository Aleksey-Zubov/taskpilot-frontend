import { AuthPageLayout } from 'src/shared/ui';
import { AuthForm } from 'src/features/auth';
import {
  TAuthForm,
  TAuthFormField,
} from 'src/features/auth/model/AuthForm.types';

import 'src/shared/styles/AuthPage.styles.scss';

const initialState: TAuthForm = {
  firstName: { value: '', isTouched: false, error: '' },
  lastName: { value: '', isTouched: false, error: '' },
  email: {
    value: '',
    isTouched: false,
    error: '',
    validation: {
      required: true,
      email: true,
    },
  },
  password: {
    value: '',
    isTouched: false,
    error: '',
    validation: {
      required: true,
      minLength: 6,
      maxLength: 20,
    },
  },
  repeatPassword: {
    value: '',
    isTouched: false,
    error: '',
    validation: {
      required: true,
      repeatField: 'password',
    },
  },
};

export const SignUpPage = () => {
  const fields: TAuthFormField[] = [
    { name: 'firstName', type: 'text', placeholder: 'Имя' },
    { name: 'lastName', type: 'text', placeholder: 'Фамилия' },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Электронная почта',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
    },
    {
      name: 'repeatPassword',
      type: 'password',
      placeholder: 'Повторите пароль',
    },
  ];

  console.log('sign-up page render');

  return (
    <AuthPageLayout>
      <h1 className="authorization-header">Создайте аккаунт</h1>
      <AuthForm
        formType="signup"
        fields={fields}
        initialFormState={initialState}
      />
    </AuthPageLayout>
  );
};
