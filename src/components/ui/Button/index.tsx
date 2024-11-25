import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({ loading, children, onClick }: IProps) => {
  return (
    <button
      className={'button-component' + (loading ? ' _loading' : '')}
      onClick={onClick}
    >
      {loading || children}
    </button>
  );
};

export default Button;
