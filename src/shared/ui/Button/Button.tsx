import { ButtonHTMLAttributes } from 'react';

import './Button.styles.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({ loading, children, onClick }: IProps) => {
  return (
    <button
      className={'button-component' + (loading ? ' _loading' : '')}
      onClick={onClick}
    >
      {loading || children}
    </button>
  );
};
