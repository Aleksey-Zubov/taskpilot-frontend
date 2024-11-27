import { useState } from 'react';
import { AuthPageLayout } from 'src/shared/ui';
import { AuthForm } from 'src/features/auth';
import { TAuthFormField } from 'src/features/auth/model/AuthForm.types';

import 'src/shared/styles/AuthPage.styles.scss';

export const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!loading);
  };

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
        type="signup"
        fields={fields}
        loading={loading}
        onSubmit={handleClick}
      />
    </AuthPageLayout>
  );
};
