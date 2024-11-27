import { MouseEvent } from 'react';
import { Input, Button } from 'src/shared/ui';
import { TAuthFormField, TAuthFormType } from '../model/AuthForm.types';

import './AuthForm.styles.scss';

interface IProps {
  type: TAuthFormType;
  fields: TAuthFormField[];
  loading: boolean;
  onSubmit: () => void;
}

export const AuthForm = ({
  type: formType,
  fields,
  loading,
  onSubmit,
}: IProps) => {
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="form-container">
      <form className="form-component">
        {fields.map(({ name, type, placeholder }, index) => (
          <div
            key={index + name}
            className={'form-component__input' + ` _${formType}`}
          >
            <Input name={name} type={type} placeholder={placeholder} />
          </div>
        ))}
        <div className="form-component__button">
          <Button loading={loading} onClick={handleSubmit}>
            {formType === 'signin' ? 'Войти' : 'Создать аккаунт'}
          </Button>
        </div>
      </form>
    </div>
  );
};
