import { AuthPageLayout } from 'src/shared/ui';
import { AuthForm } from 'src/features/auth';
import { useAuthForm } from 'src/features/auth/model/useAuthForm.hook';
import { TAuthFormField } from 'src/features/auth/model/AuthForm.types';

import 'src/shared/styles/AuthPage.styles.scss';

export const SignUpPage = () => {
  const { loading, handleChange, handleSubmit } = useAuthForm('signup');

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
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </AuthPageLayout>
  );
};
