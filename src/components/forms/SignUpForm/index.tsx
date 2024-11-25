import { useState, MouseEvent } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

import './styles.scss';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(!loading);
  };

  return (
    <form className="form-component">
      <div className="form-component__input">
        <Input type="text" placeholder="Имя" />
      </div>
      <div className="form-component__input">
        <Input type="text" placeholder="Фамилия" />
      </div>
      <div className="form-component__input">
        <Input type="email" placeholder="Электронная почта" />
      </div>
      <div className="form-component__input">
        <Input type="password" placeholder="Пароль" />
      </div>
      <div className="form-component__input">
        <Input type="password" placeholder="Повторите пароль" />
      </div>
      <div className="form-component__button">
        <Button loading={loading} onClick={handleClick}>
          Создать аккаунт
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
