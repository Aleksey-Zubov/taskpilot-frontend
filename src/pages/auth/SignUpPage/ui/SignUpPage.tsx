import { AuthPageLayout } from 'src/shared/ui';
import { AuthForm } from 'src/features/auth';
import {
  ISignUpFormData,
  TAuthFormField,
} from 'src/features/auth/model/AuthForm.types';

import 'src/shared/styles/AuthPage.styles.scss';

const initialState: ISignUpFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export const SignUpPage = () => {
  const fields: TAuthFormField[] = [
    { name: 'firstName', type: 'text', placeholder: 'Имя' },
    { name: 'lastName', type: 'text', placeholder: 'Фамилия' },
    { name: 'email', type: 'email', placeholder: 'Электронная почта' },
    { name: 'password', type: 'password', placeholder: 'Пароль' },
    {
      name: 'repeatPassword',
      type: 'password',
      placeholder: 'Повторите пароль',
    },
  ];

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
