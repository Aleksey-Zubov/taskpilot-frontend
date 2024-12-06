import { AuthPageLayout } from 'src/shared/ui';
import { AuthForm } from 'src/features/auth';
import {
  TAuthForm,
  TAuthFormField,
} from 'src/features/auth/model/AuthForm.types';

import 'src/shared/styles/AuthPage.styles.scss';

const initialState: TAuthForm = {
  email: { value: '', isTouched: false, error: '' },
  password: { value: '', isTouched: false, error: '' },
};

export const SignInPage = () => {
  const fields: TAuthFormField[] = [
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
  ];

  console.log('sign-in page render');

  // useEffect(() => console.log('use effect render'), []);

  return (
    <AuthPageLayout>
      <h1 className="authorization-header">Вход</h1>
      <AuthForm
        formType="signin"
        fields={fields}
        initialFormState={initialState}
      />
    </AuthPageLayout>
  );
};
