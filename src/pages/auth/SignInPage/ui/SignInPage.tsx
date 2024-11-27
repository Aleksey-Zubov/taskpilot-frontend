import { useState } from 'react';
import { AuthPageLayout } from 'src/shared/ui';
import { AuthForm } from 'src/features/auth';
import { TAuthFormField } from 'src/features/auth/model/AuthForm.types';

import 'src/shared/styles/AuthPage.styles.scss';

export const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!loading);
  };

  const fields: TAuthFormField[] = [
    { name: 'email', type: 'email', placeholder: 'Электронная почта' },
    { name: 'password', type: 'password', placeholder: 'Пароль' },
  ];

  return (
    <AuthPageLayout>
      <h1 className="authorization-header">Вход</h1>
      <AuthForm
        type="signin"
        fields={fields}
        loading={loading}
        onSubmit={handleClick}
      />
    </AuthPageLayout>
  );
};
