import { ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return (
    <div className="authorization">
      <main className="authorization__main">{children}</main>
    </div>
  );
};

export default AuthLayout;
