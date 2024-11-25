import { ReactNode } from 'react';

import './styles.scss';

interface IProps {
  children: ReactNode;
}

const FormLayout = ({ children }: IProps) => {
  return <div className="container">{children}</div>;
};

export default FormLayout;
