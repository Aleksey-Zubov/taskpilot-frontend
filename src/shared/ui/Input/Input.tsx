import { InputHTMLAttributes } from 'react';

import './Input.styles.scss';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="input-component">
      <input {...props} className="input-component__input" />
    </div>
  );
};
