import { InputHTMLAttributes } from 'react';

import './Input.styles.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  inputTouched?: boolean;
  error?: string;
}

export const Input = ({
  type,
  placeholder,
  name,
  value,
  inputTouched,
  error,
  ...props
}: IProps) => {
  return (
    <div
      className={'input-component' + (error && inputTouched ? ' _error' : '')}
    >
      <input
        {...props}
        type={type}
        name={name}
        placeholder={placeholder}
        className="input-component__input"
      />
      {error && inputTouched ? (
        <div className="input-component__error-message">{error}</div>
      ) : null}
    </div>
  );
};
