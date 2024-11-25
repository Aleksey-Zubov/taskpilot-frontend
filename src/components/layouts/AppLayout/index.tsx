import { ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return <div className="application-container">{children}</div>;
};

export default AppLayout;
