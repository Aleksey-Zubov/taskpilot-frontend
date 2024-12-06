import { ReactNode } from 'react';

import './AuthPageLayout.styles.scss';

interface IProps {
  children: ReactNode;
}

export const AuthPageLayout = ({ children }: IProps) => {
  return (
    <div className="authorization-page">
      <main className="authorization-page__content">{children}</main>
    </div>
  );
};
