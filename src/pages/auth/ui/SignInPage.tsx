import { useState, MouseEvent } from 'react';
import AuthPageLayout from 'src/shared/ui/layouts/AuthPageLayout';
import Button from 'src/shared/ui/components/Button';
import Input from 'src/shared/ui/components/Input';

import './styles.scss';

export const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(!loading);
  };
  return (
    <AuthPageLayout>
      <h1 className="authorization-header">Вход</h1>
      <div className="form-container">
        <form className="form-component">
          <div className="form-component__input">
            <Input type="email" placeholder="Электронная почта" />
          </div>
          <div className="form-component__input">
            <Input type="password" placeholder="Пароль" />
          </div>
          <div className="form-component__button">
            <Button loading={loading} onClick={handleClick}>
              Войти
            </Button>
          </div>
        </form>
      </div>
    </AuthPageLayout>
  );
};
