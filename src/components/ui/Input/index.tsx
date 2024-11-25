import { InputHTMLAttributes } from 'react';

import './styles.scss';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="input-component">
      <input {...props} className="input-component__input" />
    </div>
  );
};

export default Input;
