import { Input, Button } from 'src/shared/ui';
import { TAuthFormField, TAuthFormType } from '../model/AuthForm.types';

import './AuthForm.styles.scss';

interface IProps {
  type: TAuthFormType;
  fields: TAuthFormField[];
  loading: boolean;
  onSubmit: () => void;
  onChange: (name: string, value: string) => void;
}

export const AuthForm = ({
  type: formType,
  fields,
  loading,
  onSubmit,
  onChange,
}: IProps) => {
  return (
    <div className="form-container">
      <form className="form-component" onSubmit={(e) => e.preventDefault()}>
        {fields.map(({ name, type, placeholder }, index) => (
          <div
            key={index + name}
            className={'form-component__input' + ` _${formType}`}
          >
            <Input
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={(e) => onChange(name, e.target.value)}
            />
          </div>
        ))}
        <div className="form-component__button">
          <Button loading={loading} onClick={onSubmit}>
            {formType === 'signin' ? 'Войти' : 'Создать аккаунт'}
          </Button>
        </div>
      </form>
    </div>
  );
};
